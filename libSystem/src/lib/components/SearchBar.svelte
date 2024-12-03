<script lang="ts">
    let searchQuery: string = $state("");
    let searchBarResults = $state<string[]>([]);
    let focusedInput = $state(false);

    let timeout: NodeJS.Timeout | null = null; // Timer for debouncing
    const debounceTime: number = 500;

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
    {#if searchBarResults.length > 0 && searchQuery.length > 0}
        <ul
            class="text-black absolute top-full mt-1 z-10 bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-auto"
        >
            {#each searchBarResults as suggestion}
                <li
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onclick={() => console.log(suggestion)}
                >
                    {suggestion.media_type} | {suggestion.title}
                </li>
            {/each}
        </ul>
    {/if}
</div>
