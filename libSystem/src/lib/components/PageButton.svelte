<script lang="ts">
    export let callback;
    export let arrow;
</script>

<button
    class="transition-transform duration-300 hover:scale-105 hover:text-purple-300"
    onclick={callback}
>
    {arrow}
</button>
