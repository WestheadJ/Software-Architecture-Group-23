import pb from '../lib/pocketbaseClient';

export async function initializeDatabase() {
    const collections = await pb.collections.getList();
    const userCollection = collections.items.find((collection) => collection.name === 'User');
    const bookCollection = collections.items.find((collections) => collections.name === 'Book');

    if (!userCollection) {
        await pb.collections.create({
            name: 'User',
            schema: [
                {name: 'name', type: 'text'},
                {name: 'email', type: 'email'},
                {name: 'password', type: 'text'}
            ]
        });
    }

    if (!bookCollection) {
        await pb.collections.create({
            name: 'Book',
            schema: [
                { name: 'title', type: 'text' },
                { name: 'author', type: 'text' },
                { name: 'genre', type: 'text' },
                { name: 'synopsis', type: 'text' },
                { name: 'publicationDate', type: 'date' },
                { name: 'totalPages', type: 'number' },
                { name: 'status', type: 'text', options: { allowedValues: ['available', 'reserved', 'borrowed'] } },
                { name: 'borrowerId', type: 'text' },
                { name: 'dueDate', type: 'date' }
            ]
        });
    }
}