import { fullSearch } from '$lib/api/search';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
    // Check if user is authenticated
    if (!locals.pb.authStore.isValid) {
        throw redirect(302, "/login")
    }

    // Check for the search parameter
    const searchQuery = url.searchParams.get('query');
    const page = url.searchParams.get('page')
    if (!searchQuery || searchQuery.trim() === '') {
        throw redirect(302, '/'); // Redirect with an error
    }

    const results = await fullSearch(searchQuery)

    const resultData = results.data
    const resultsAmount = results.results

    // Return data to the page if checks pass
    return {
        isAuthenticated: locals.pb.authStore.isValid,
        resultData,
        resultsAmount,
        searchQuery
    };
};