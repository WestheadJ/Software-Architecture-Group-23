import type { MediaAPIKey } from "$lib/interfaces/mediaAPIToken"
import type { Email } from "$lib/types/types.ts"

export async function getToken(email: Email): Promise<MediaAPIKey> {
  const getTokenResponse = await fetch("http://127.0.0.1:3000/auth/token/get-token", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "email": email }) })
  const tokenData = await getTokenResponse.json()
  const token: MediaAPIKey = {
    token: tokenData.token, email: email
  }
  return token
}

export async function verifyToken(email: Email, token: String): Promise<Boolean> {
  const getVerifyTokenResponse = await fetch("http://127.0.0.1:3000/auth/token/verify", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "email": email, "token": token }) })
  const verifyTokenData = await getVerifyTokenResponse.json()
  return verifyTokenData.auth
}

