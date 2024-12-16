import { searchByMediaType } from '$lib/api/search';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, url }) => {
    // Check if user is authenticated
    if (!locals.pb.authStore.isValid) {
        throw redirect(302, "/login")
    }

    // Check for the search parameter

    let from: any = url.searchParams.get('from') || 0
    let to: any = url.searchParams.get("to") || 10

    from = parseInt(from)
    to = parseInt(to) - 1


    const results = await searchByMediaType(from, to)

    const resultData: any[] = results.data

    console.log(resultData)

    // Return data to the page if checks pass
    return {
        isAuthenticated: locals.pb.authStore.isValid,
        mediaTypeData: resultData,
        mediaTypeResultsAmount: resultData[0].total_media_types,

    };
};