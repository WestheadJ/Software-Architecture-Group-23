import type { Email } from "$lib/types/types"

export async function searchBar(value: string) {

    const searchResponse = await fetch("http://127.0.0.1:3000/media/search/search-bar", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": value }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData
}

export async function fullSearch(query: string, from: number, to: number) {

    const searchResponse = await fetch('http://127.0.0.1:3000/media/search', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": query, "from": from, "to": to }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData
}

export async function searchMediaItem(mediaTitle: string, mediaAuthors: string, mediaType: string) {
    const searchResponse = await fetch('http://127.0.0.1:3000/media/search/item', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "mediaTitle": mediaTitle, "mediaAuthors": mediaAuthors, "mediaType": mediaType }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData
}

export async function searchByAuthor(from: number, to: number) {
    const searchResponse = await fetch('http://127.0.0.1:3000/media/search/authors', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "from": from, "to": to }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData;
}

export async function searchByGenre(from: number, to: number) {
    const searchResponse = await fetch('http://127.0.0.1:3000/media/search/genres', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "from": from, "to": to }) })
    const searchResponseData = await searchResponse.json();
    return searchResponseData;
}

export async function searchByMediaType(from: number, to: number) {
    const searchResponse = await fetch('http://127.0.0.1:3000/media/search/media-types', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "from": from, "to": to }) })
    const searchResponseData = await searchResponse.json();
    return searchResponseData;
}
