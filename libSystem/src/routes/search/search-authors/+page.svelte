<script lang="ts">
    import { page } from "$app/stores";

    import PageButton from "$lib/components/PageButton.svelte";

    let authorsData = $state<any[]>($page.data.authorsData);
    let authorsResultsAmount = $state($page.data.authorsResultsAmount);

    let currentPage = $state(1); //set the current page as 1
    let totalPages = $state(1); // the amount of pages, default is 1
    let pageSize = 10; // Default to 10 // limit the amount of results default is 1
    let pageNumbers: any[] = $state([]);

    let from: any = $page.url.searchParams.get("from");

    currentPage = from / pageSize + 1;

    totalPages = Math.ceil(authorsResultsAmount / pageSize);

    // If 3 or fewer pages, show all
    if (totalPages <= 3) {
        pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
        // If more than 3 pages, show dynamic pagination
    } else {
        let neighbors = [currentPage - 1, currentPage, currentPage + 1].filter(
            (page) => page > 1 && page < totalPages, // Only include valid page numbers
        );

        // Combine first page, neighbors, and last page
        pageNumbers = [1, ...neighbors, totalPages].sort((a, b) => a - b);
    }

    // Navigate to a specific page
    const goToPage = (page: number) => {
        // Calculate the "from" and "to" values for the new page
        const from = (page - 1) * pageSize;
        const to = from + pageSize;

        // Redirect to the search page with updated query parameters
        window.location.href = `/search/search-authors?&from=${from}&to=${to}&page=${currentPage}`;
    };

    // Navigate to the next page
    const goToNextPage = () => {
        if (currentPage < totalPages) goToPage((currentPage += 1));
        else {
            currentPage = 1;
            goToPage(currentPage);
        }
    };

    // Navigate to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            goToPage((currentPage -= 1));
        } else {
            currentPage = totalPages;
            goToPage(currentPage);
        }
    };
</script>

<div class="pt-20 h-full p-8 text-center">
    <div>
        <h1 class="text-3xl">Showing Our Authors</h1>
        <p>Results: {authorsResultsAmount}</p>

        <div class="pt-5">
            <!-- Previous page button -->
            <PageButton callback={goToPreviousPage} arrow="&laquo; Prev" />

            <!-- Page number buttons -->
            {#each pageNumbers as page}
                {#if page === currentPage}
                    <button
                        class="p-2 text-violet-400 hover:text-xl hover:text-purple-300"
                        onclick={() => goToPage(page)}
                    >
                        <u>{page}</u>
                    </button>
                {:else}
                    <button
                        class="p-1 hover:text-xl hover:text-purple-300"
                        onclick={() => goToPage(page)}
                    >
                        {page}
                    </button>
                {/if}
            {/each}

            <PageButton callback={goToNextPage} arrow="Next &raquo;" />
        </div>
    </div>

    <!-- Search Content & Filter Container -->
    <section class="min-h-screen flex justify-center flex-row">
        <!-- Search Content -->
        <div class="flex flex-col">
            {#each authorsData as result, i}
                <a class="p-4 text-xl font-semibold">{result.authors}</a>
            {/each}
        </div>
    </section>
</div>
