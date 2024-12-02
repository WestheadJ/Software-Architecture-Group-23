import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, cookies }) => {

  console.log("line 5", cookies.get("session_key"))
  return {
    isAuthenticated: locals.pb.authStore.isValid,
    apiKey: locals.mediaAPIKey
  };
};



