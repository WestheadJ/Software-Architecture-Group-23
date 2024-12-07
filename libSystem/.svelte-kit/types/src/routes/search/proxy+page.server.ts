// @ts-nocheck
import { fullSearch } from '$lib/api/search';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }: Parameters<PageServerLoad>[0]) => {
    // Check if user is authenticated
    if (!locals.pb.authStore.isValid) {
        throw redirect(302, "/login")
    }

    // Check for the search parameter
    const searchQuery = url.searchParams.get('query');
    let from: any = url.searchParams.get('from') || 1
    let to: any = url.searchParams.get("to") || 10

    from = parseInt(from) - 1
    to = parseInt(to) - 1

    console.log("From and to", from, to)

    if (!searchQuery || searchQuery.trim() === '') {
        throw redirect(302, '/'); // Redirect with an error
    }

    const results = await fullSearch(searchQuery, from, to)

    const resultData: any[] = results.data
    const resultsAmount: number = results.results

    // Return data to the page if checks pass
    return {
        isAuthenticated: locals.pb.authStore.isValid,
        searchBarResults: resultData,
        queryResultsAmount: resultsAmount,
        searchQuery
    };
};