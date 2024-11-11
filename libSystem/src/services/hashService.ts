import bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export async function comparePasswords(password: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(password, hash);
}
