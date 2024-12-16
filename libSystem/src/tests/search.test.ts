import { searchBar } from '$lib/api/search';
import exp from 'constants';
import { describe, it, expect } from 'vitest';

describe("search for an item", async () => {
    it("Searches for an item that exists", async () => {
        const searchResponse = await fetch('http://127.0.0.1:3000/media/search/item', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "mediaTitle": "The Social Network", "mediaAuthors": "David Fincher", "mediaType": "film" }) })
        const searchResponseData = await searchResponse.json()
        expect(searchResponseData.data.data[0].title).toBe("The Social Network")
    })
    it("Searches for an item that doesn't exist", async () => {
        const searchResponse = await fetch('http://127.0.0.1:3000/media/search/item', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "mediaTitle": "The Social Network", "mediaAuthors": "Wrong Author", "mediaType": "film" }) })
        const searchResponseData = await searchResponse.json()
        expect(searchResponseData.data.data).toStrictEqual([])
    })
    it("Searches for an item without a query in the body", async () => {
        const searchResponse = await fetch('http://127.0.0.1:3000/media/search/item', { headers: { "Content-Type": "application/json" }, method: "POST" })
        const searchResponseData = await searchResponse.json()
        expect(searchResponseData.error).toBeTypeOf("boolean")
    })
})

describe("Use a search query", async () => {
    it("Search for an item without from or to", async () => {
        const searchResponse = await fetch('http://127.0.0.1:3000/media/search', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": "t" }) })
        const searchResponseData = await searchResponse.json()
        expect(searchResponseData.error).toBe(true)
    })
    it("Use a search query that gives no result", async () => {
        const searchResponse = await fetch('http://127.0.0.1:3000/media/search', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": "The Social Network Field", "from": 0, "to": 4 }) })
        const searchResponseData = await searchResponse.json()
        expect(searchResponseData.data).toStrictEqual([])
    })
    it("Use a search query with results", async () => {
        const searchResponse = await fetch('http://127.0.0.1:3000/media/search', { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "query": "t", "from": 0, "to": 4 }) })
        const searchResponseData = await searchResponse.json()

        expect(searchResponseData.results).toBe(58)
    })
})