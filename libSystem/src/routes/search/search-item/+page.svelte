<script lang="ts">
    import { page } from "$app/stores";
    const { resultData } = $page.data;
    let item = resultData.data[0];
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
