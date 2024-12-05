<script lang="ts">
    import { page } from "$app/stores";
    const { resultData } = $page.data;
</script>

<div class="flex display-row">
    <div>
        <img src={resultData.media_image} alt={resultData.title} />
    </div>
    <div class="flex display-col">
        <h1>{resultData.title}</h1>
        <p>{resultData.authors}</p>
    </div>
    <div>{resultData.synopsis}</div>
</div>
