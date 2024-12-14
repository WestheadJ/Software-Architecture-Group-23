import { describe, it, expect } from 'vitest';


async function getAPIToken(): Promise<String> {

    const res: Response = await fetch("http://127.0.0.1:3000/auth/token/get")
    const data = await res.json()
    return data
}

describe("Fetching the API key for the media service", () => {
    it("Fetches an API key to use ", async () => {
        const token = await getAPIToken()
        console.log(token)
        expect(token).toBeTypeOf("string")
    })

})