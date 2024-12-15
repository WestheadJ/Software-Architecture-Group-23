import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { bookId, userId } = await request.json();

        if (!bookId || !userId) {
            return new Response(JSON.stringify({ success: false, message: 'Missing bookId or userId' }), { status: 400 });
        }

        const { error } = await supabase
            .from('borrowed')
            .delete()
            .eq('id', bookId)
            .eq('user_id', userId);

        if (error) {
            return new Response(JSON.stringify({ success: false, message: 'Failed to return book' }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, message: 'Book returned successfully' }), { status: 200 });
    } catch (err) {
        console.error('Error returning book:', err);
        return new Response(JSON.stringify({ success: false, message: 'Internal server error' }), { status: 500 });
    }
};
