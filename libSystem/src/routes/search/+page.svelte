<script lang="ts">
    import { page } from "$app/stores";
    import Card from "$lib/components/Card.svelte";

    const { resultData, resultsAmount, searchQuery } = $page.data;

    console.log(resultsAmount);

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
            <Card
                mediaTitle={result.title}
                mediaAuthors={result.authors}
                mediaDesc={result.synopsis}
                imgUrl={result.media_image}
            />
        {/each}
    </div>
</div>
