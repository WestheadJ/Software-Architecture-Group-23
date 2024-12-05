<script lang="ts">
    let searchQuery: string = $state("");
    let searchBarResults = $state<any[]>([]);

    let props: any = $props();

    let timeout: NodeJS.Timeout | null = null; // Timer for debouncing
    const debounceTime: number = 500;

    let results = $state(0);

    $effect(() => {
        handleInput(searchQuery);
    });

    function handleInput(searchQuery: String | any) {
        clearTimeout(timeout!);
        timeout = setTimeout(() => {
            if (searchQuery.length != 0) {
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

        results = result.data.results;
        searchBarResults = result.data.data;
    }
</script>

<div class="form-control w-full max-w-sm">
    <input
        type="text"
        placeholder="Search media?"
        class="input input-bordered rounded-full px-4"
        aria-label="Search"
        bind:value={searchQuery}
    />
    <!-- Dropdown -->
    {#if searchBarResults.length > 0 && searchQuery.length > 0 && !props.isMainSearch}
        <ul
            class="text-black absolute top-full mt-1 z-10 bg-white border border-gray-200 rounded-md shadow-md max-auto overflow-auto"
        >
            {#each searchBarResults as suggestion}
                <a
                    href="/search/search-item?mediaTitle={suggestion.title}&mediaAuthors={suggestion.authors}&mediaType={suggestion.media_type}"
                >
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {suggestion.media_type} | {suggestion.title} | {suggestion.authors}
                        | {suggestion.genre}
                    </li>
                </a>
            {/each}
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                View all {results} results...
            </li>
        </ul>
    {/if}
</div>

{#if props.isMainSearch}
    <div>
        <a class="btn btn-primary" href="/search?query={searchQuery}">Search</a>
    </div>
{/if}
