import pb from '$lib/pocketbaseClient';
import type { User } from '$lib/interfaces/User';

export async function loginUser(formData: User) {
    try {
        const authData = await pb.collection('users').authWithPassword(
            formData.email,
            formData.password,
        );

        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
    } catch (error) {
        throw error;
    }
}