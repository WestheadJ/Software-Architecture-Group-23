// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User } from "$lib/interfaces/User";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: User;
			mediaAPIKey: String| null;
			user: { id: string; email: string } | null; 
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
