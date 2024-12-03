import type { Email } from "$lib/types/types"

export async function searchBar(value: String) {

    const searchResponse = await fetch("http://127.0.0.1:3000/media/search/search-bar", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": value }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData
}

export async function fullSearch(value: String) {

    const searchResponse = await fetch('http://127.0.0.1:3000/media/search', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": value }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData
}