<script lang="ts">
  import type { UserFormData } from "../../interfaces/User";
  

</script>

<form class="w-[20rem] h-[20rem] bg-zinc-900 rounded-lg p-2 flex flex-col gap-2 m-auto p-4">
      <h1 class="text-2xl text-center text-white font-semibold mb-2">Login</h1>
      <label for="email">Email:</label>
      <input name="email" type="text" placeholder="Email" class="input input-bordered w-full max-w-xs"/>
      <label for="password">Password:</label>
      <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
      <button class="btn btn-primary mt-auto">Login</button>
</form>
