<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
  let searchBar: any;
</script>

<div class="hero bg-black flex items-center justify-center h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md text-white">
      <h1 class="text-5xl font-bold mb-6">AML Library</h1>
      <p class="py-4 text-lg display">Discover a wide range of content.</p>

      <div class="relative">
        <SearchBar bind:this={searchBar} isMainSearch={true} />
      </div>
    </div>
  </div>
  <div class="absolute top-3/4 translate-y-40 hover:scale-105">
    <a href="#SearchForCategoies">
      <div class="flex flex-row">
        <span class="pr-4">Scroll down for more!</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 12 16 16 12" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      </div>
    </a>
  </div>
</div>
