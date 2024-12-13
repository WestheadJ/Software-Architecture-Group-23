<script lang="ts">
    export let isFilterOpen: boolean;
    export let filter: string[];
    export let bindGroup: string[];
    export let title: string;
</script>

<a
    onclick={() => {
        if (isFilterOpen) {
            isFilterOpen = false;
        } else isFilterOpen = true;
    }}>{title}:</a
>
{#if isFilterOpen}
    <div class=" flex flex-col text-left p-3">
        {#each filter as filterItem}
            <label
                ><input
                    type="checkbox"
                    class="checkbox checkbox-primary"
                    value={filterItem}
                    bind:group={bindGroup}
                />{filterItem}</label
            >
        {/each}
    </div>
{/if}
