import { redirect } from "@sveltejs/kit";

export const POST = ({ locals }) => {
  locals.pb.authStore.clear();
  locals.mediaAPIKey = ""
  throw redirect(303, '/login');
}
