<script lang="ts">
    export let callback;
    export let arrow;
</script>

<button class="hover:text-xl hover:text-purple-300" onclick={callback}>
    {arrow}
</button>
