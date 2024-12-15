<script>
  import Hero from "$lib/components/Hero.svelte";
</script>

<Hero />

<div class="w-full p-4 justify-center align-middle">
  <h1 id="SearchForCategoies" class="text-center text-4xl font-bold mb-6">
    Search By a Category
  </h1>
  <div class="flex flex-row justify-center">
    <a href="/search/authors"
      ><span
        class="badge badge-success h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-emerald-400 hover:text-slate-700"
        >Authors</span
      ></a
    >
    <a href="/search/genres">
      <span
        class="badge badge-primary h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-indigo-400 hover:text-slate-700"
        >Genres</span
      ></a
    >
    <a href="/search/media-type">
      <span
        class="badge badge-secondary h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-pink-400 hover:text-slate-700"
        >Media Type</span
      ></a
    >
  </div>
</div>
