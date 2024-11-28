import type { User } from "$lib/interfaces/User";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    const formData: User = {
      email: data.get('email') as string,
      password: data.get('password') as string,
      passwordConfirm: data.get('passwordConfirm') as string,
    };

    console.log(formData);
    let returnedSuccess: boolean = false;

    try {
      await locals.pb.collection('users').requestVerification(formData.email);
      await locals.pb.collection('users').create(formData);
      console.log("This should return true");
      returnedSuccess = true;
    } catch (error) {
      console.log("Error:", error);
      return { error: true };
    }

    // This is so hacky I'm ashamed.
    if (returnedSuccess) {
      throw redirect(301, '/login');
    }
  }
} satisfies Actions;

