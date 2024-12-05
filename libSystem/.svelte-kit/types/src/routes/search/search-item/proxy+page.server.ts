// @ts-nocheck
import { fullSearch, searchMediaItem } from '$lib/api/search';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }: Parameters<PageServerLoad>[0]) => {
    // Check if user is authenticated
    if (!locals.pb.authStore.isValid) {
        throw redirect(302, "/login")
    }

    // Check for the search parameter
    const mediaTitle: string | null = url.searchParams.get('mediaTitle')
    const mediaAuthors: string | null = url.searchParams.get("mediaAuthors");
    const mediaType: string | null = url.searchParams.get("mediaType");

    if ((!mediaTitle || mediaTitle.trim() === "") && (!mediaAuthors || mediaAuthors.trim() === "") && (!mediaType || mediaType.trim() === "")) {
        throw redirect(302, '/'); // Redirect with an error
    }

    const results = await searchMediaItem(mediaTitle, mediaAuthors, mediaType);

    const resultData = results.data

    // Return data to the page if checks pass
    return {
        isAuthenticated: locals.pb.authStore.isValid,
        resultData,
    };
};