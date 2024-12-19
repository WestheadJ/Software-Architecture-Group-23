import type { User } from "$lib/interfaces/User";
import type { Email } from "$lib/types/types";
import { type Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    const formData: User = {
      email: data.get('email') as Email,
      password: data.get('password') as string,
      passwordConfirm: data.get('passwordConfirm') as string,
    };

    const authData = {
      email: formData.email,
      password: formData.password,
    };
    try {
      await locals.pb.collection('users').create(formData);
      await locals.pb.collection('users').authWithPassword(authData.email, authData.password);

      return { success: true, message: 'User created and authenticated successfully.' };

    } catch (error) {
      console.log("Error:", error);
      return { error: true };
    }

  }
} satisfies Actions;

