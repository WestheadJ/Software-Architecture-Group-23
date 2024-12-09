<script lang="ts">
    // Get what is passed in through the props store as export let doesn't work neither does export const...
    let props: any = $props();

    // Debouncing search bar results setup
    let timeout: NodeJS.Timeout | null = null; // Timer for debouncing
    const debounceTime: number = 500;

    let queryResultsAmount = $state(0); // queryResultsAmount is a variable that changes state
    let searchQuery: string = $state("");
    let searchBarResults = $state<any[]>([]);

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

        queryResultsAmount = result.data.results;
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
</div>

{#if props.isMainSearch}
    <div>
        <a class="btn btn-primary" href="/search?query={searchQuery}">Search</a>
    </div>
{/if}
