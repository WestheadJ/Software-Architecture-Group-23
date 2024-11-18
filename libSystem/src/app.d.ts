// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User } from "$lib/interfaces/User";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: User;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
