import { describe, it, expect } from 'vitest';

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