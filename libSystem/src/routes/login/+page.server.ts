import type { User } from "$lib/interfaces/User";
import { getToken, verifyToken } from "$lib/api/mediaAPI";
import { redirect, type Actions } from "@sveltejs/kit";
import type { Email } from "$lib/types/types";

export const actions = {
  default: async ({ locals, request }) => {
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
      return { error: true };
    }

    let token: String;
    try {
      token = await getToken(formData.email as Email)
      locals.mediaAPIKey = token;
    }
    catch (err) {
      console.log("Error getting token:", err)
      return { error: true };

    }

    const isTokenVerified = await verifyToken(formData.email as Email, locals.mediaAPIKey)


    console.log("Is token verified: ", isTokenVerified)


    if (locals.pb.authStore.isValid && isTokenVerified) {
      throw redirect(302, '/');
    }
    else {
      locals.pb.authStore.clear();
    }
  }
} satisfies Actions;
