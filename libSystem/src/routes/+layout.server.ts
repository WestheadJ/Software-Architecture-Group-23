import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    isAuthenticated: locals.pb.authStore.isValid,
    mediaAPIKey: locals.mediaAPIKey
  };
};



