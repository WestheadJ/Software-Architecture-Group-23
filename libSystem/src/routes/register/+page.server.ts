import type { User } from "$lib/interfaces/User";
import { type Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    const formData: User = {
      email: data.get('email') as string,
      password: data.get('password') as string,
      passwordConfirm: data.get('passwordConfirm') as string,
    };

    const authData = {
      email: formData.email,
      password: formData.password,
    };

    console.log(formData);

    if (formData.email === '' || formData.password === '' || formData.passwordConfirm === '') {
      console.log("Some fields aren't full");
      return {
        error: true,
        status: 400,
      };
    }

    try {
      await locals.pb.collection('users').requestVerification(formData.email);
      await locals.pb.collection('users').create(formData);
      await locals.pb.collection('users').authWithPassword(authData.email, authData.password);

      console.log(locals.pb.authStore.isValid);
      return { success: true, message: 'User created and authenticated successfully.' };

    } catch (error) {
      console.log("Error:", error);
      return { error: true };
    }
  }
} satisfies Actions;

