// See https://svelte.dev/docs/kit/types#app.d.ts

import type { mediaAPIKey } from "$lib/interfaces/mediaAPIToken";
import type { User } from "$lib/interfaces/User";
import type { Email } from "$lib/types/types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: User;
			mediaAPIKey: mediaAPIKey;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
