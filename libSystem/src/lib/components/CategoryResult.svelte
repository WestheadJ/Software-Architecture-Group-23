<script lang="ts">
    export let resultTitle: string;
    export let resultCount;
</script>

<div
    class=" grid grid-cols-1 gap-4 p-4 w-full card bg-base-100 shadow-xl flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
>
    <span class="text-xl font-semibold pl-2 pr-2">{resultTitle}</span>
    <span class="pl-2 pr-2">
        Amount of related media: {resultCount}
    </span>
    <a class="btn btn-primary pl-2 pr-2" href="/search?query={resultTitle}"
        >View</a
    >
</div>
