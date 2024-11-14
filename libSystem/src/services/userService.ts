import pb from '../lib/pocketbaseClient';
import type { User, UserRecord } from '../interfaces/User';
import { hashPassword, comparePasswords } from './hashService';

export async function registerUser(user: User) {
    const passwordHash = await hashPassword(user.password);
    const data = {
        name: user.name,
        email: user.email,
        passwordHash: passwordHash,
    };
    return await pb.collection('User').create(data);
}

export async function loginUser(email: string, password: string): Promise<boolean> {
    const result = await pb.collection('User').getFirstListItem(`email="${email}"`) as UserRecord;
    if (result) {
        return comparePasswords(password, result.passwordHash);
    }
    return false;
}
