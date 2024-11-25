<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let form;

  $: {
    if (form?.success) {
      goto("/");
    }
  }
</script>

<div class="w-screen h-screen flex">
  <form method="POST" use:enhance>
    <h1 class="text-2xl text-center text-white font-semibold mb-2">Sign Up</h1>
    <label for="email">Email:</label>
    <input
      name="email"
      type="email"
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
    <label for="passwordConfirm">Confirm Password:</label>
    <input
      name="passwordConfirm"
      type="password"
      placeholder="Confirm Password"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn btn-primary mt-auto" type="submit">Register</button>
    {#if $page.form?.status === 400}
      <h1 class="text-red-400 mt-5 rounded p-2 bg-base-500">
        Please fill all fields in the form.
      </h1>
    {:else if $page.form?.error}
      <h1 class="text-red-400 mt-5 rounded p-2 bg-base-500">
        Failure Registering, you likely have an account with us already.
      </h1>
    {/if}
  </form>
</div>

<style>
  form {
    @apply w-[20rem] h-[24rem] bg-zinc-900 rounded-lg p-2 flex flex-col gap-2 m-auto p-4;
  }

  input {
    @apply input input-bordered rounded w-full max-w-xs;
  }

  button {
    @apply btn btn-primary mt-auto;
  }
</style>
