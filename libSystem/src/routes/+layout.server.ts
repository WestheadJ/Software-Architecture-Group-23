import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
  let token = cookies.get("session_key") || ""
  console.log("line 5", cookies.get("session_key"))
  return {
    isAuthenticated: locals.pb.authStore.isValid,
    // apiKey: token
  };
};



