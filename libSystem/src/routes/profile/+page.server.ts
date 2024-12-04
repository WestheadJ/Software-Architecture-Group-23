import { supabase } from '$lib/supabase';
import type { Actions, PageServerLoad } from './$types';

// Fetch borrowed books for the user
export const load: PageServerLoad = async ({ locals }) => {
    if (!locals.user) {
        return { borrowedBooks: [] };
    }

    const { data: borrowedBooks, error } = await supabase
        .from('borrowed')
        .select(`
            id,
            user_id,
            media_id,
            borrowed_at
        `)
        .eq('user_id', locals.user.id)
        .order('borrowed_at', { ascending: false });

    if (error) {
        console.error('Error fetching borrowed books:', error);
        return { borrowedBooks: [] };
    }

    return { borrowedBooks };
};

// Handle returning a book
export const actions: Actions = {
    returnBook: async ({ request }) => {
        const formData = await request.formData();
        const borrowedId = formData.get('borrowedId') as string;

        if (!borrowedId) {
            return { success: false, message: 'Invalid borrowed ID' };
        }

        // Delete the borrowed record from the database
        const { error } = await supabase
            .from('borrowed')
            .delete()
            .eq('id', borrowedId);

        if (error) {
            console.error('Error returning book:', error);
            return { success: false, message: 'Failed to return book' };
        }

        return { success: true, message: 'Book returned successfully' };
    }
};
