import { describe, it, expect } from 'vitest';

async function getAPITokenValid(): Promise<String> {
    const res = await fetch("http://127.0.0.1:3000/auth/token/get-token", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "email": "test@test.com" }) })
    const data = await res.json()
    return data.token
}

async function getAPITokenNotValid(): Promise<String> {
    const res: Response = await fetch("http://127.0.0.1:3000/auth/token/get-token", { method: "POST", })
    const data = await res.json()
    return data.error
}

describe("Fetching the API key for the media service", async () => {
    it("Fetches an API key to use ", async () => {
        const token = await getAPITokenValid()
        expect(token).toBeTypeOf("string")
    })

    it("Fetches an API key to use without an email ", async () => {
        const token = await getAPITokenNotValid()
        expect(token).toBeTypeOf("boolean")
        expect(token).toBe(true)
    })
})