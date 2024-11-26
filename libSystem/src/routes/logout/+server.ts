import { redirect } from "@sveltejs/kit";

export const POST = ({ locals }) => {
  console.log("Clearing Authstore...");
  locals.pb.authStore.clear();
  locals.mediaAPIKey = ""
  throw redirect(303, '/login');
}
