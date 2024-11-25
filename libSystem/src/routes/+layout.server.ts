import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  console.log(locals.pb.authStore.isValid);
  return {
    isAuthenticated: locals.pb.authStore.isValid
  };
};
