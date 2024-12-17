<script lang="ts">
    export let user: { email: string; banner?: string } = {
        email: "example@example.com",
        banner: "https://via.placeholder.com/1200x400?text=Profile+Banner",
    };
    export let borrowedBooks: Array<{
        id: string;
        borrowed_at: string;
        media: {
            id: string;
            title: string;
            authors: string;
            media_image: string;
        };
    }> = [
        {
            id: "1",
            borrowed_at: "2024-12-01",
            media: {
                id: "book1",
                title: "The Great Gatsby",
                authors: "F. Scott Fitzgerald",
                media_image: "https://via.placeholder.com/150",
            },
        },
        {
            id: "2",
            borrowed_at: "2024-11-15",
            media: {
                id: "book2",
                title: "To Kill a Mockingbird",
                authors: "Harper Lee",
                media_image: "https://via.placeholder.com/150",
            },
        },
    ];

    let notification: { message: string; type: 'success' | 'error' } | null = null;

    async function renewBook(bookId: string) {
        alert(`Renewing book with ID: ${bookId}`);
    }

    async function returnBook(bookId: string) {
        alert(`Returning book with ID: ${bookId}`);
    }
</script>

<div class="profile-page p-4">
    <div class="profile-header mb-8">
        <img
            src={user.banner || "https://via.placeholder.com/1200x400?text=No+Banner"}
            alt="Profile Banner"
            class="w-full h-64 object-cover rounded-lg shadow"
        />
        <h1 class="text-4xl font-bold mt-4">Welcome, {user.email || "Guest"}</h1>
    </div>

    <h2 class="text-3xl font-bold mb-4">Your Borrowed Books</h2>

    {#if notification}
        <div class={`notification notification-${notification.type}`}>
            {notification.message}
        </div>
    {/if}

    {#if borrowedBooks.length > 0}
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each borrowedBooks as book}
                <li class="border p-4 rounded shadow bg-white">
                    <img
                        src={book.media.media_image}
                        alt="{book.media.title}"
                        class="w-full h-48 object-cover rounded"
                    />
                    <h2 class="text-xl font-semibold mt-2">{book.media.title}</h2>
                    <p class="text-gray-500">{book.media.authors}</p>
                    <p class="text-sm mt-1">
                        <strong>Borrowed At:</strong> {new Date(book.borrowed_at).toLocaleDateString()}
                    </p>

                    <div class="flex justify-between mt-4">
                        <button
                            on:click={() => renewBook(book.id)}
                            class="btn btn-primary"
                        >
                            Renew for 30 Days
                        </button>
                        <button
                            on:click={() => returnBook(book.id)}
                            class="btn btn-secondary"
                        >
                            Return Book
                        </button>
                    </div>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="text-gray-500">You have no borrowed books.</p>
    {/if}
</div>

<style>
    .profile-page {
        max-width: 1200px;
        margin: auto;
    }

    .profile-header {
        text-align: center;
    }

    .notification {
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        font-weight: bold;
        text-align: center;
    }

    .notification-success {
        background-color: #d4edda;
        color: #155724;
    }

    .notification-error {
        background-color: #f8d7da;
        color: #721c24;
    }

    .btn {
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font-weight: bold;
        cursor: pointer;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .btn-secondary {
        background-color: #6c757d;
        color: white;
    }

    .btn-secondary:hover {
        background-color: #495057;
    }

    .border {
        border: 1px solid #ddd;
    }

    .rounded {
        border-radius: 0.5rem;
    }

    .shadow {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .bg-white {
        background-color: white;
    }

    .w-full {
        width: 100%;
    }

    .h-48 {
        height: 12rem;
    }

    .h-64 {
        height: 16rem;
    }

    .object-cover {
        object-fit: cover;
    }

    .text-gray-500 {
        color: #6b7280;
    }

    .mt-4 {
        margin-top: 1rem;
    }

    .mb-8 {
        margin-bottom: 2rem;
    }
</style>
