<script lang="ts">
    import { page } from "$app/stores";

    // Access data from the `$page` store
    const { resultData, resultsAmount, searchQuery } = $page.data;

    let pages = 1;
</script>

<div class="container mx-auto p-4">
    <!-- Render your page content here -->
    <div class="mt-4">
        <p>Your custom content goes here...</p>
        <p class="mt-2">Showing Results For: <strong>{searchQuery}</strong></p>
    </div>
    <div>
        {#each resultData as result}
            <div class="display-column p-3 m-3">
                <h3>{result.title}</h3>
                <p>{result.authors}</p>
                <img src={result.media_image} height="auto" width="200px" />
            </div>
        {/each}
    </div>
</div>
