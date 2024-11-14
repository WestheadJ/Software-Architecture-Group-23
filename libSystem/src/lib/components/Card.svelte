<script lang="ts">
  export let mediaTitle: string;
  export let mediaDesc: string;
  export let tags: string[] = [];
</script>

<div class="card bg-base-100 w-96 shadow-xl m-10 max-h-[30rem]">
  <figure>
    <img
      src="https://m.media-amazon.com/images/I/51tHrDGFHRL._AC_UF894,1000_QL80_.jpg"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {mediaTitle}
      <div class="badge badge-secondary">New</div>
    </h2>
    <p>{mediaDesc}</p>
    <div class="card-actions justify-end justify-center my-1">
      {#each tags as tag }
        <div class="badge badge-outline">{tag}</div>
      {/each}
    </div>
    <button class="btn btn-primary hover:scale-105">View</button>
  </div>

</div>
