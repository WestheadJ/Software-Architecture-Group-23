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

<div class="w-screen h-screen flex flex-col">
  <form method="POST" class="m-auto" use:enhance>
    <label for="email">Email:</label>
    <input type="email" name="email" placeholder="email" />
    <label for="password">Password:</label>
    <input type="password" name="password" placeholder="Password Example" />
    <label for="passwordConfirm">Confirm Password:</label>
    <input
      type="password"
      name="passwordConfirm"
      placeholder="Confirm Password"
    />
    <button
      class="w-full rounded bg-yellow-500 h-10 mt-2 text-black hover:bg-yellow-300 hover:scale-105"
      >Register</button
    >
  </form>
  {#if $page.form?.success}<h1
      class="m-2 bg-green-200 rounded p-2 text-black text-center"
    >
      Success
    </h1>{/if}
  {#if $page.form?.error}<h1>Failure</h1>{/if}
</div>

<style>
  form {
    @apply w-[20rem] h-fit rounded p-5 bg-white;
    @apply flex flex-col;
  }

  input {
    @apply rounded;
  }
</style>
