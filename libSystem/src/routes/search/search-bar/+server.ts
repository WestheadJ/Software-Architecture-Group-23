import type { Email } from '$lib/types/types.js';
import { searchBar } from '$lib/api/search.js'

export async function POST({ request }) {
    const data = await request.json(); // Your server-side logic
    const email: Email = data.email
    const token: String = data.token
    const value: String = data.value

    const searchResult = await searchBar(value, email, token)

    return new Response(JSON.stringify({ success: true, data: searchResult }), {
        headers: { 'Content-Type': 'application/json' }
    });
}