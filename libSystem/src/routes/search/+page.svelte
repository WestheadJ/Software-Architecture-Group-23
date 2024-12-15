<script lang="ts">
    import { page } from "$app/stores";
    import MediaCard from "$lib/components/MediaCard.svelte";
    import FilterCollapsable from "$lib/components/FilterCollapsable.svelte";
    import PageButton from "$lib/components/PageButton.svelte";

    let searchQuery: string = $state("");
    let searchBarResults = $state<any[]>([]);
    let queryResultsAmount = $state(0); // queryResultsAmount is a variable that changes state

    searchBarResults = $page.data.searchBarResults;
    searchQuery = $page.data.searchQuery;
    queryResultsAmount = $page.data.queryResultsAmount;

    let currentPage = $state(1); //set the current page as 1
    let totalPages = $state(1); // the amount of pages, default is 1
    let pageSize = Number($page.url.searchParams.get("pageSize")) || 10; // Default to 10 // limit the amount of results default is 1
    let pageNumbers: any[] = $state([]);

    let selectedAuthors: string[] = $state([]);
    let selectedGenres: string[] = $state([]);
    let selectedMediaType: string[] = $state([]);

    let isAuthorsFilterOpen = $state(false);
    let isGenreFilterOpen = $state(false);
    let isMediaTypeFilterOpen = $state(false);

    let authorsFilter = $state([
        ...new Set(searchBarResults.map((item) => item.authors)),
    ]);
    let genreFilter = $state([
        ...new Set(searchBarResults.map((item) => item.genre)),
    ]);
    let mediaTypeFilter = $state([
        ...new Set(searchBarResults.map((item) => item.media_type)),
    ]);

    let from: any = $page.url.searchParams.get("from");

    currentPage = from / pageSize + 1;

    totalPages = Math.ceil(queryResultsAmount / pageSize);

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
        window.location.href = `/search?query=${searchQuery}&from=${from}&to=${to}&page=${currentPage}`;
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

    $effect(() => {
        searchBarResults = $page.data.searchBarResults
            .filter(
                (item: any) =>
                    selectedAuthors.length === 0 ||
                    selectedAuthors.includes(item.authors),
            )
            .filter(
                (item: any) =>
                    selectedGenres.length === 0 ||
                    selectedGenres.includes(item.genre),
            );
    });
</script>

<div class="pt-20 h-full p-8 text-center">
    <div>
        <h1 class="text-3xl">
            Showing Results For: <strong><u>{searchQuery}</u></strong>
        </h1>
        <p>Results: {queryResultsAmount}</p>

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
        <div
            class=" grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 w-[75%] p-6"
        >
            {#each searchBarResults as result, i}
                <MediaCard
                    mediaTitle={result.title}
                    mediaAuthors={result.authors}
                    mediaDesc={result.synopsis}
                    mediaGenre={result.genre}
                    mediaType={result.media_type}
                    imgUrl={result.media_image}
                />
            {/each}
        </div>

        <!-- Filter -->
        <div class="w-[25%] border-l-gray-600 border-l-2 flex flex-col">
            <FilterCollapsable
                title="Authors"
                isFilterOpen={isAuthorsFilterOpen}
                filter={authorsFilter}
                bind:bindGroup={selectedAuthors}
            />
            <FilterCollapsable
                title="Genre"
                isFilterOpen={isGenreFilterOpen}
                filter={genreFilter}
                bind:bindGroup={selectedGenres}
            />
            <FilterCollapsable
                title="Media Type"
                isFilterOpen={isMediaTypeFilterOpen}
                filter={mediaTypeFilter}
                bind:bindGroup={selectedMediaType}
            />
        </div>
    </section>
</div>
