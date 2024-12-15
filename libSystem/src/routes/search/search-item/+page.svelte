<script lang="ts">
    import { page } from "$app/stores";
    let item = $state($page.data.resultData.data[0]);

    $effect(() => {
        item = $page.data.resultData.data[0];
    });
</script>

<div class="">
    <div>
        <img src={item.media_image} alt={item.title} />
    </div>
    <div class="">
        <h1>{item.title}</h1>
        <p>{item.authors}</p>
    </div>
    <div>{item.synopsis}</div>
</div>
