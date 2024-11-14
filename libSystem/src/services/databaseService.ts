import pb from '../lib/pocketbaseClient';

export async function initializeDatabase() {
    const collections = await pb.collections.getList();
    const userCollection = collections.items.find((collection) => collection.name === 'User');

    if (!userCollection) {
        await pb.collections.create({
            name: 'User',
            schema: [
                { name: 'name', type: 'text' },
                { name: 'email', type: 'email' },
                { name: 'password', type: 'text' }
            ]
        });
    }
}
