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

      try {
        // get API key from mediaAPI
        const tokenResponse = await fetch("http://127.0.0.1:3000/auth/token/get-token", {
          headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({ "email": formData.email })
        })
        if (tokenResponse.status === 401) {
          console.log("Token error ")
          return { error: true, message: "Token Error" };
        }
        if (tokenResponse.status === 200) {
          const tokenResponseData = await tokenResponse.json()
          // console.log(tokenResponseData)

          locals.mediaAPIKey = tokenResponseData

          try {
            const tokenAuthResponse = await fetch(`http://127.0.0.1:3000/auth/token/verify`, { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify({ "email": formData.email, "token": tokenResponseData }) })
            const tokenAuthResponseData = await tokenAuthResponse.json()
            if (tokenAuthResponseData) {
              return { success: true, message: 'Successfully logged in' };
            }
            else {
              console.log("Token Error")
              return { error: true, message: "Token Error" };
            }

          } catch (error) {
            console.log(error)
            return { error: true, message: error };
          }
        }
      }
      catch (error) {
        console.log(error)
        return { error: true, message: error };
      }
    }
    catch (error) {
      console.log(error);
      return { error: true, message: error };
    }
  }
} satisfies Actions;
