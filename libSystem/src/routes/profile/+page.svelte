<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Card from "$lib/components/Card.svelte";
</script>

<Navbar/>

<div class="w-full h-60 bg-primary flex items-center justify-center relative">
  <h1 class="text-4xl font-bold text-white">Welcome Back,geef!</h1>

  <div class="absolute bottom-[-4rem]">
    <div class="avatar">
      <div class="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile Avatar" />
      </div>
    </div>
  </div>
</div>

<div class="w-full flex flex-col items-center mt-20 px-4">
  <p class="text-gray-600 text-lg">geef@hotmail.com</p>
  <div class="mt-4 flex gap-4">
    <button class="btn btn-primary">Edit Profile</button>
    <button class="btn btn-outline btn-primary">Logout</button>
  </div>
</div>

<div class="w-full px-4 mt-10">
  <h2 class="text-3xl font-semibold text-center mt-5">Reserved Books</h2>
  <div class="w-full flex flex-wrap justify-center gap-6 mt-6">
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']} />
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['Romance', 'Classic']} />
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['Justice', 'Classic']} />
  </div>
</div>
<div class="w-full px-4 mt-10">
  <h2 class="text-3xl font-semibold text-center mt-5"> books to return</h2>
  <div class="w-full flex flex-wrap justify-center gap-6 mt-6">
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['War', 'Non-fiction']} />
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['Romance', 'Classic']} />
    <Card mediaTitle="War and Peace" mediaDesc="An example description" tags={['Justice', 'Classic']} />
  </div>
</div>

<style>

.banner {
  background-color: #4a90e2;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar img {
  object-fit: cover;
}

h1 {
  color: white;
}

p {
  color: #718096;
}
</style>
