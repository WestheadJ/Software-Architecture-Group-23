// @ts-nocheck
import type { LayoutServerLoad } from "./$types";

export const load = async ({ locals, cookies }: Parameters<LayoutServerLoad>[0]) => {

  console.log("line 5", cookies.get("session_key"))
  return {
    isAuthenticated: locals.pb.authStore.isValid,
    apiKey: locals.mediaAPIKey
  };
};



