<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Card from "$lib/components/Card.svelte";
</script>

<Navbar />
<Hero />
<div class="w-full">
  <h1 class="text-3xl font-semibold text-center mt-5">Books</h1>
  <div class="w-full flex rounded">
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']}/>
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']}/>
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']}/>
  </div>
</div>


