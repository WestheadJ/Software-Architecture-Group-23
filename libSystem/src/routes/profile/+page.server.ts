import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(303, '/login'); 
    }

    const userId = locals.user.id; 

    const { data: borrowedBooks, error } = await supabase
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
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching borrowed books:', error);
        return { borrowedBooks: [] };
    }

    return { borrowedBooks }; 
};
