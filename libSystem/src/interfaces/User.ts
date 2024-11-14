export interface User {
    name: string;
    email: string;
    password: string;
}

export interface UserRecord {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    created: string;
    updated: string;
}