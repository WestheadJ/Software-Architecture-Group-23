
import { searchBar } from '$lib/api/search.js'

export async function POST({ request }) {
    const data = await request.json(); // Your server-side logic

    const value: string = data.value

    const searchResult = await searchBar(value)

    return new Response(JSON.stringify({ success: true, data: searchResult.result }), {
        headers: { 'Content-Type': 'application/json' }
    });
}