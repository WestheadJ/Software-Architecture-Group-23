import pb from '../lib/pocketbaseClient';
import type {Book, BookRecord} from '../interfaces/Book';

/**
 *
 * @param bookId
 */
async function getBookById(bookId: string): Promise<BookRecord | null> {
    try {
        return (await pb.collection('Book').getOne(bookId)) as unknown as BookRecord;
    } catch (error) {
        console.error("Book not found:", error);
        return null;
    }
}

/**
 *
 * @param bookId
 * @param updatedData
 */
async function updateBook(bookId: string, updatedData: Partial<Book>): Promise<BookRecord | null> {
    const sanitizedData = Object.fromEntries(
        Object.entries(updatedData).map(([key, value]) => [key, value === null ? undefined : value])
    );

    try {
        return (await pb.collection('Book').update(bookId, sanitizedData)) as unknown as BookRecord;
    } catch (error) {
        console.error("Failed to update book:", error);
        return null;
    }
}

/**
 *
 * @param book
 */
export async function addBook(book: Book): Promise<BookRecord> {
    const data = {
        title: book.title,
        author: book.author,
        genre: book.genre,
        synopsis: book.synopsis,
        publicationDate: book.publicationDate,
        totalPages: book.totalPages,
        status: 'available'
    };
    return (await pb.collection('Book').create(data)) as unknown as BookRecord;
}

/**
 *
 * @param bookId
 * @param userId
 */
export async function reserveBook(bookId: string, userId: string): Promise<BookRecord | null> {
    const book = await getBookById(bookId);
    if (book && book.status === 'available') {
        return await updateBook(bookId, {status: 'reserved', borrowerId: userId});
    }
    return null;
}

/**
 *
 * @param bookId
 * @param userId
 * @param dueDate
 */
export async function borrowBook(bookId: string, userId: string, dueDate: string): Promise<BookRecord | null> {
    const book = await getBookById(bookId);
    if (book && book.status === 'reserved' && book.borrowerId === userId) {
        return await updateBook(bookId, { status: 'borrowed', dueDate });
    } else if (book && book.status === 'available') {
        return await updateBook(bookId, { status: 'borrowed', borrowerId: userId, dueDate });
    }
    return null;
}

/**
 *
 * @param bookId
 */
export async function returnBook(bookId: string): Promise<BookRecord | null> {
    const book = await getBookById(bookId);
    if (book && book.status === 'borrowed') {
        return await updateBook(bookId, { status: 'available', borrowerId: undefined, dueDate: undefined });
    }
    return null;
}

/**
 *
 * @param bookId
 */
export async function checkAvailability(bookId: string): Promise<boolean> {
    const book = await getBookById(bookId);
    return book ? book.status === 'available' : false;
}