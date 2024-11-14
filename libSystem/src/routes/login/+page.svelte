<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import LoginForm from "$lib/components/LoginForm.svelte";
</script>

<Navbar />

<!-- Remove Login Button on /Login -->
<!-- Redirect to ./ upon successful login. -->

<div class="w-screen h-screen flex">
  <LoginForm />
</div>


