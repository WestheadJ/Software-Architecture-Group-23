<script lang="ts">
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  if ($page.form?.success) {
    goto("/");
  }
</script>

<div class="w-screen h-screen flex">
  <form method="POST" use:enhance>
    <h1 class="text-2xl text-center text-white font-semibold mb-2">Login</h1>
    <label for="email">Email:</label>
    <input
      name="email"
      type="text"
      placeholder="Email"
      class="input input-bordered w-full max-w-xs"
    />
    <label for="password">Password:</label>
    <input
      type="password"
      name="password"
      placeholder="Password"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn btn-primary mt-auto" type="submit">Login</button>
    {#if $page.form?.error}
      <h1 class="text-red-400">Invalid Login Credentials</h1>
    {/if}
  </form>
</div>

<style>
  form {
    @apply w-[20rem] h-[20rem] bg-zinc-900 rounded-lg p-2 flex flex-col gap-2 m-auto p-4;
  }
</style>
