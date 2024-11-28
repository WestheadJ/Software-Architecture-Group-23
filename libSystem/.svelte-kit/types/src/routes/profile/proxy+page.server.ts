// @ts-nocheck
import { supabase } from '$lib/supabaseClient';
import type { Actions, PageServerLoad } from './$types';

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
    // Fetch borrowed books for the user
    const { data: borrowedBooks, error } = await supabase
        .from('borrowed')
        .select(`
            id,
            borrowed_at,
            media (
                title,
                synopsis,
                genre
            )
        `)
        .eq('user_id', locals.user?.id) // Filter by logged-in user's ID
        .order('borrowed_at', { ascending: false });

    if (error) {
        console.error('Error fetching borrowed books:', error);
        return { borrowedBooks: [] }; // Return empty list on error
    }

    return { borrowedBooks };
};
