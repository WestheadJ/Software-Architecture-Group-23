import type { User } from "$lib/interfaces/User";
import { getToken, verifyToken } from "$lib/api/mediaAPITokens";
import { redirect, type Actions } from "@sveltejs/kit";
import type { Email } from "$lib/types/types";

export const actions = {
  default: async ({ locals, request, cookies }) => {
    const data = await request.formData();
    const formData: User = {
      email: data.get('email') as Email,
      password: data.get('password') as string,
      passwordConfirm: data.get('passwordConfirm') as string,
    };


    try {
      await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
      await locals.pb.collection('users').authRefresh();

    } catch (error) {
      console.log(error);
      locals.pb.authStore.clear();

      return { error: true };
    }

    try {
      let token = await getToken(formData.email as Email)
      locals.mediaAPIKey = token
    }
    catch (err) {
      console.log("Error getting token:", err)
      locals.pb.authStore.clear();

      return { error: true };

    }
    console.log(locals.mediaAPIKey)

    const isTokenVerified = await verifyToken(formData.email as Email, locals.mediaAPIKey.token)

    // this was a test to see if the condition below was causing the error
    if (isTokenVerified) {
      // cookies.set('session_key', locals.mediaAPIKey, {
      //   path: '/', sameSite: "strict", httpOnly: true
      // });
    }

    console.log(cookies.get('session_key'))

    if (locals.pb.authStore.isValid && isTokenVerified) {
      // Cookies does not work with throw redirect...
      throw redirect(302, '/');
    }
    else {
      locals.pb.authStore.clear();
    }
  }
} satisfies Actions;
