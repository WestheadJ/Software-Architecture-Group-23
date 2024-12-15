<script lang="ts">
  export let mediaTitle: string;
  export let mediaDesc: string;
  export let mediaAuthors: string;
  export let mediaGenre: string;
  export let mediaType: string;
  export let tags: string[] = [];
  export let imgUrl: string;
</script>

<div
  class="card bg-base-100 shadow-xl m-6 max-h-[50rem] flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
>
  <figure>
    <img class="w-full h-48 object-cover" src={imgUrl} alt={mediaTitle} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {mediaTitle}
      <div class="badge badge-secondary">New</div>
    </h2>
    <h3>Authors:</h3>
    {mediaAuthors}
    <h4>Genres:</h4>
    {mediaGenre}
    <p>{mediaDesc}</p>
    <div class="card-actions justify-center my-1">
      {#each tags as tag}
        <div class="badge badge-outline">{tag}</div>
      {/each}
    </div>
    <a
      href="/search/search-item?mediaTitle={mediaTitle}&mediaAuthors={mediaAuthors}&mediaType={mediaType}"
      class="btn btn-primary hover:scale-105"
    >
      View
    </a>
  </div>
</div>
