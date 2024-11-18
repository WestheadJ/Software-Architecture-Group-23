import type { User } from "$lib/interfaces/User";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    const formData: User = {
      email: data.get('email') as string,
      password: data.get('password') as string,
      passwordConfirm: data.get('passwordConfirm') as string,
    };

    try {
      await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
      await locals.pb.collection('users').authRefresh();
      return { success: true, message: 'Successfully logged in' };
    } catch (error) {
      console.log(error);
      return { error: true, message: error };
    }
  }
} satisfies Actions;
