<script>
  import Hero from "$lib/components/Hero.svelte";
</script>

<Hero />

<div class="w-full px-4">
  <div class="flex items-center justify-center relative">
    <div class="absolute left-0 flex items-center">
      <div class="dropdown">
        <button tabindex="0" class="btn btn-ghost"> Categories </button>
        <ul
          tabindex="0"
          class="menu dropdown-content bg-base-100 rounded-box w-52 shadow-md"
        >
          <li><a>Fiction</a></li>
          <li><a>Non-fiction</a></li>
          <li><a>Classics</a></li>
          <li><a>Romance</a></li>
        </ul>
      </div>
    </div>
    <h1 class="text-3xl font-semibold text-center mt-5">Books</h1>
  </div>

  <!-- <div class="w-full flex flex-wrap justify-center gap-6 mt-8">
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']}/>
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']}/>
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']}/>
  </div> -->
</div>
