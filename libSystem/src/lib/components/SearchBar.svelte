<script lang="ts">
    // Props passed in
    let props: any = $props();

    // Debouncing setup
    let timeout: NodeJS.Timeout | null = null;
    const debounceTime = 500;

    // Reactive state variables
    let queryResultsAmount = $state(0);
    let searchQuery = $state("");
    let searchBarResults = $state<any[]>([]);
    let displayDropdown = $state(false);
    let isInputFocused = $state(false);

    $effect(() => {
        handleInput(searchQuery);
    });

    function dropdownActive(): boolean {
        return (
            searchBarResults.length > 0 &&
            searchQuery.length > 0 &&
            !props.isMainSearch
        );
    }

    function handleInput(query: string) {
        clearTimeout(timeout!);
        timeout = setTimeout(() => {
            if (query.length !== 0) {
                searchBar();
            }
        }, debounceTime);
    }

    async function searchBar() {
        const response = await fetch("/search/search-bar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ value: searchQuery }),
        });
        const result = await response.json();

        queryResultsAmount = result.data.results;
        searchBarResults = result.data.data;
    }

    // Clear input field
    function clearSearch() {
        searchQuery = "";
        searchBarResults = [];
    }
</script>

<!-- Search Bar -->
<div class="form-control w-full max-w-sm relative">
    <input
        type="text"
        placeholder="Search media?"
        class="input input-bordered rounded-full px-4 pr-10"
        aria-label="Search"
        bind:value={searchQuery}
    />
    <!-- Clear Button -->
    <!-- {#if searchQuery.length > 0}
        <button
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onclick={clearSearch}
            aria-label="Clear search"
        >
            ✕
        </button>
    {/if} -->

    <!-- Dropdown -->
    {#if dropdownActive()}
        <ul
            class="text-black absolute top-full mt-1 z-10 bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-auto w-full"
        >
            {#each searchBarResults as suggestion}
                <a
                    href="/search/search-item?mediaTitle={suggestion.title}&mediaAuthors={suggestion.authors}&mediaType={suggestion.media_type}"
                    onclick={() => (searchBarResults = [])}
                >
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {suggestion.media_type} | {suggestion.title} | {suggestion.authors}
                        | {suggestion.genre}
                    </li>
                </a>
            {/each}
            <a
                href="/search?query={searchQuery}"
                onclick={() => (searchBarResults = [])}
            >
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    View all {queryResultsAmount} results...
                </li>
            </a>
        </ul>
    {/if}

    {#if props.isMainSearch}
        <div>
            <a class="btn btn-primary" href="/search?query={searchQuery}"
                >Search</a
            >
        </div>
    {/if}
</div>
