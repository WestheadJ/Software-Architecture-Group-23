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
      const res = await fetch("http://127.0.0.1:3000/auth/token/get", {
        headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({ "email": formData.email })
      })
      const data = await res.json()
      if (data.status === "error") {

        return { error: true, message: `Token error! ${data.message}` };
      }

      locals.pb.local["mediaAPIToken"] = data.token;
      return { success: true, message: 'Successfully logged in' };
    } catch (error) {
      console.log(error);
      return { error: true, message: error };
    }
  }
} satisfies Actions;
