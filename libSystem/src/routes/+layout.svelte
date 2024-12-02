<script lang="ts">
  import "../app.css";
  import type { LayoutData } from "./$types";
  import type { Snippet } from "svelte";
  import { page } from "$app/stores";
  let { children, data }: { data: LayoutData; children: Snippet } = $props();
  let currentPageUrl: String = $page.url.pathname;

  let searchQuery = $state();

  let timeout: NodeJS.Timeout | null = null; // Timer for debouncing
  const debounceTime: number = 500;

  $effect(() => {
    handleInput(searchQuery);
  });

  function handleInput(searchQuery: String | any) {
    clearTimeout(timeout!); // Clear the previous debounce timer
    timeout = setTimeout(() => {
      searchBar(); // Trigger the search
    }, debounceTime);
  }
  async function searchBar() {
    console.log(data.apiKey);
    // const response = await fetch("/search/search-bar", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     token: data.mediaAPIKey,
    //     email: data.mediaAPIKey.email,
    //     value: searchQuery,
    //   }),
    // });
    // const result = await response.json();
    // console.log("Server Response:", result);
  }
</script>

<div class="navbar bg-base-100 fixed z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li><a href="/profile">Profile</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center flex items-center gap-4">
    <a class="flex items-center gap-3 text-xl font-bold min-w-[11rem]" href="/">
      <img
        src="https://clipart-library.com/img/1716256.png"
        alt="AML Library Logo"
        class="h-8 w-8"
      />
      <h1>AML Library</h1>
    </a>
    {#if (currentPageUrl !== "/login" && currentPageUrl !== "/register") || data.isAuthenticated}
      <div class="form-control w-full max-w-sm">
        <input
          type="text"
          placeholder="Search media?"
          class="input input-bordered rounded-full px-4"
          aria-label="Search"
          bind:value={searchQuery}
        />
        {searchQuery}
      </div>
    {/if}
  </div>
  <div class="navbar-end gap-2">
    {#if !data.isAuthenticated}
      <a class="btn btn-primary" href="/register">Sign up?</a>
      <a class="btn btn-outline btn-primary" href="/login">Login</a>
    {:else}
      <form action="/logout" method="POST">
        <button class="btn btn-primary">Logout</button>
      </form>
    {/if}
  </div>
</div>

{@render children()}
