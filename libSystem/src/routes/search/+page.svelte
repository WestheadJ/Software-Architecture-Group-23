<script lang="ts">
    import { page } from "$app/stores";
    import Card from "$lib/components/Card.svelte";

    let searchQuery: string = $state("");
    let searchBarResults = $state<any[]>([]);
    let queryResultsAmount = $state(0); // queryResultsAmount is a variable that changes state

    searchBarResults = $page.data.searchBarResults;
    searchQuery = $page.data.searchQuery;
    queryResultsAmount = $page.data.queryResultsAmount;

    let currentPage = $state(1); //set the current page as 1
    let totalPages = $state(1); // the amount of pages, default is 1
    let pageSize = $state(10); // limit the amount of results default is 1
    let pageNumbers: any[] = $state([]);

    totalPages = Math.ceil(queryResultsAmount / pageSize);

    if (totalPages <= 3) {
        // If 3 or fewer pages, show all
        pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        // If more than 3 pages, show dynamic pagination
        const neighbors = [
            currentPage - 1,
            currentPage,
            currentPage + 1,
        ].filter(
            (page) => page > 1 && page < totalPages, // Only include valid page numbers
        );

        // Combine first page, neighbors, and last page
        pageNumbers = [1, ...neighbors, totalPages].sort((a, b) => a - b);
    }

    // Navigate to a specific page
    const goToPage = (page: number) => {
        // Calculate the "from" and "to" values for the new page
        const from = (page - 1) * pageSize;
        const to = from + pageSize - 1;

        // Redirect to the search page with updated query parameters
        window.location.href = `/search?query=${searchQuery}&from=${from}&to=${to}`;
    };

    // Navigate to the next page
    const goToNextPage = () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    };

    // Navigate to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    };
</script>

<div class="pt-16 h-full">
    <h1 class="text-3xl">
        Showing Results For: <strong><u>{searchQuery}</u></strong>
    </h1>

    <!-- Previous page button -->
    <button onclick={goToPreviousPage}> &laquo; Prev </button>

    <!-- Page number buttons -->
    {#each pageNumbers as page}
        <button
            onclick={() => goToPage(page)}
            class={page === currentPage ? "active" : ""}
        >
            {page}
        </button>
    {/each}

    <!-- Next page button -->
    <button onclick={goToNextPage} disabled={currentPage === totalPages}>
        Next &raquo;
    </button>
</div>

<div class="min-h-screen flex justify-center">
    <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-screen-2xl p-6"
    >
        {#each searchBarResults as result, i}
            <Card
                mediaTitle={result.title}
                mediaAuthors={result.authors}
                mediaDesc={result.synopsis}
                mediaGenre={result.genre}
                mediaType={result.media_type}
                imgUrl={result.media_image}
            />
        {/each}
    </div>
</div>
