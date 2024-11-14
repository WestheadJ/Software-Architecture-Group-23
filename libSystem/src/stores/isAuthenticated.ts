import { writable, type Writable } from "svelte/store";
import pb from '$lib/pocketbaseClient';

export const isAuthenticated = writable(pb.authStore.isValid);

pb.authStore.onChange(() => {
    isAuthenticated.set(pb.authStore.isValid);
});
