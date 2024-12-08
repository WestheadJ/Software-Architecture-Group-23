import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { bookId, userId } = await request.json();

        if (!bookId || !userId) {
            return new Response(JSON.stringify({ success: false, message: 'Missing bookId or userId' }), { status: 400 });
        }

        const { data: borrowed, error } = await supabase
            .from('borrowed')
            .select('borrowed_at')
            .eq('id', bookId)
            .eq('user_id', userId)
            .single();

        if (error || !borrowed) {
            return new Response(JSON.stringify({ success: false, message: 'Borrowed record not found' }), { status: 404 });
        }

        const newBorrowedAt = new Date(borrowed.borrowed_at);
        newBorrowedAt.setDate(newBorrowedAt.getDate() + 30); // Extend by 30 days

        const { error: updateError } = await supabase
            .from('borrowed')
            .update({ borrowed_at: newBorrowedAt.toISOString() })
            .eq('id', bookId);

        if (updateError) {
            return new Response(JSON.stringify({ success: false, message: 'Failed to renew book' }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, message: 'Book renewed successfully' }), { status: 200 });
    } catch (err) {
        console.error('Error renewing book:', err);
        return new Response(JSON.stringify({ success: false, message: 'Internal server error' }), { status: 500 });
    }
};
