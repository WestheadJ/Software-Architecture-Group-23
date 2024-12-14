<script>
  import Hero from "$lib/components/Hero.svelte";
  import { redirect } from "@sveltejs/kit";
</script>

<Hero />

<div class="w-full p-4 justify-center align-middle">
  <h1 class="text-center text-4xl font-bold mb-6 underline">
    Search By A Category
  </h1>
  <div class="flex flex-row justify-center">
    <a href="/search/search-authors"
      ><span
        class="badge badge-success h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-emerald-400 hover:text-slate-700"
        >Authors</span
      ></a
    >
    <span
      class="badge badge-primary h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-indigo-400 hover:text-slate-700"
      >Genres</span
    >
    <span
      class="badge badge-secondary h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-pink-400 hover:text-slate-700"
      >Media Type</span
    >
  </div>
</div>
