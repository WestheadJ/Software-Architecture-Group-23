// @ts-nocheck
import type { LayoutServerLoad } from "./$types";

export const load = async ({ locals }: Parameters<LayoutServerLoad>[0]) => {
  console.log(locals.pb.authStore.isValid);
  return {
    isAuthenticated: locals.pb.authStore.isValid
  };
};
