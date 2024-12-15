// @ts-nocheck
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }: Parameters<PageServerLoad>[0]) => {
    if (!locals.user) {
        throw redirect(303, '/login');
    }

    const userId = parseInt(locals.user.id, 10); // Adjust if user_id is bigint
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const itemsPerPage = 10;
    const offset = (page - 1) * itemsPerPage;

    console.log('User ID:', userId, 'Page:', page, 'Offset:', offset);

    const { data: borrowedBooks, error: borrowedError } = await supabase
        .from('borrowed')
        .select(`
            id,
            borrowed_at,
            media:media_id (
                id,
                title,
                authors,
                media_image
            )
        `)
        .eq('user_id', userId)
        .range(offset, offset + itemsPerPage - 1);

    if (borrowedError) {
        console.error('Error fetching borrowed books:', borrowedError);
        return { borrowedBooks: [], totalPages: 1, currentPage: page };
    }

    const { count, error: countError } = await supabase
        .from('borrowed')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId);

    if (countError) {
        console.error('Error fetching borrowed books count:', countError);
        return { borrowedBooks: [], totalPages: 1, currentPage: page };
    }

    const totalPages = Math.ceil((count || 0) / itemsPerPage);

    return { borrowedBooks, totalPages, currentPage: page };
};
