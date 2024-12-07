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

    const getQueryParams = () => {
        const params = new URLSearchParams(window.location.search);

        // Extract the search query and range (from parameter)
        const from = parseInt(params.get("from") || "0");

        // Calculate the current page from the "from" parameter
        currentPage = Math.floor(from / pageSize) + 1;
    };

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

<div class="container mx-auto p-4">
    <!-- Render your page content here -->
    <div class="mt-4">
        <p>Your custom content goes here...</p>
        <p class="mt-2">Showing Results For: <strong>{searchQuery}</strong></p>
    </div>

    <!-- Pagination controls -->
    <div>
        <!-- Previous page button -->
        <button
            onclick={() => {
                console.log(goToPreviousPage);
            }}
            disabled={currentPage === 1}
        >
            &laquo; Prev
        </button>

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
        <button
            onclick={() => {
                goToNextPage;
            }}
            disabled={currentPage === totalPages}
        >
            Next &raquo;
        </button>
    </div>

    <div>
        {#each searchBarResults as result, i}
            {i + 1}
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
