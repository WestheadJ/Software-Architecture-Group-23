// @ts-nocheck
import type { LayoutServerLoad } from "./$types";

export const load = async ({ locals, cookies }: Parameters<LayoutServerLoad>[0]) => {
  let token = cookies.get("session_key") || ""
  console.log("line 5", cookies.get("session_key"))
  return {
    isAuthenticated: locals.pb.authStore.isValid,
    // apiKey: token
  };
};



