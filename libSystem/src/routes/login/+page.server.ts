import { loginUser } from "$lib/server/userHandler";
import type { User } from "$lib/interfaces/User";
import type { Actions } from "./$types";

export const actions = {
    default: async ({  request }) => {
        const data = await request.formData();
        const formData: User = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        };
        
        try {
            await loginUser(formData);
            return { success: true };
            
        } catch (error) {
            return {
                status: 400,
                body: {error: "Invalid Credentials"}
            };
        }
    }
} satisfies Actions;