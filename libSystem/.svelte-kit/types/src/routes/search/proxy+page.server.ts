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
    const pageSize = Number(url.searchParams.get('pageSize')) | 10
    let from: any = url.searchParams.get('from') || 0
    let to: any = url.searchParams.get("to") || pageSize

    from = parseInt(from)
    to = parseInt(to) - 1


    if (!searchQuery || searchQuery.trim() === '') {
        throw redirect(302, '/'); // Redirect with an error
    }

    const results = await fullSearch(searchQuery, from, to
    )

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