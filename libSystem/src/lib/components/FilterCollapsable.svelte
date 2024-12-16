<script lang="ts">
    export let isFilterOpen: boolean;
    export let filter: string[];
    export let bindGroup: string[];
    export let title: string;
</script>

<a
    class="flex flex-row w-full justify-center text-left"
    onclick={() => {
        if (isFilterOpen) {
            isFilterOpen = false;
        } else isFilterOpen = true;
    }}
    >{title}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transform transition-transform"
        viewBox="0 0 20 20"
        fill="currentColor"
        class:rotate-180={isFilterOpen}
    >
        <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.193l3.71-3.963a.75.75 0 111.08 1.04l-4 4.25a.75.75 0 01-1.08 0l-4-4.25a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
        />
    </svg></a
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
