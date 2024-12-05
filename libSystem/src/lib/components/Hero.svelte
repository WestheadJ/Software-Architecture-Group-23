<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
  let searchBar: any;
  let searchQuery: any;
</script>

<div class="hero bg-black min-h-screen flex items-center justify-center">
  <div class="hero-content text-center">
    <div class="max-w-md text-white">
      <h1 class="text-5xl font-bold mb-6">AML Library</h1>
      <p class="py-4 text-lg display">Discover a wide range of content.</p>

      <div class="relative">
        <SearchBar bind:this={searchBar} isMainSearch={true} />
      </div>
    </div>
  </div>
</div>
