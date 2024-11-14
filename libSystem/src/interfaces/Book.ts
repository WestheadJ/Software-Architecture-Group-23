export interface Book {
    title: string;
    author: string;
    genre: string;
    synopsis: string;
    publicationDate?: string;
    totalPages?: number;
    status: 'available' | 'reserved' | 'borrowed';
    borrowerId?: string;
    dueDate?: string;
}

export interface BookRecord {
    id: string;
    title: string;
    author: string;
    genre: string;
    synopsis: string;
    publicationDate?: string;
    totalPages?: number;
    status: 'available' | 'reserved' | 'borrowed';
    borrowerId?: string;
    dueDate?: string;
    created: string;
    updated: string;
}