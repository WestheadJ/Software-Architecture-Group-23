<script lang="ts">
    import { page } from "$app/stores";
    let item = $state($page.data.resultData.data[0]);

    $effect(() => {
        item = $page.data.resultData.data[0];
    });
</script>

<div class="hero bg-base-200 pt-24 p-10">
    <div class="hero-content flex-col lg:flex-row">
        <img
            src={item.media_image}
            alt={item.title}
            class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
            <h1 class="text-5xl font-bold">{item.title}</h1>
            <h3 class="text-lg">Author: {item.authors}</h3>
            <p class="py-6">
                {item.synopsis}
            </p>
        </div>
    </div>
</div>

<div class="w-full p-4 justify-center align-middle">
    <h1 class="text-center text-4xl font-bold mb-6">
        Want to search for more?
    </h1>
    <h2 class="text-center text-2xl font-bold mb-6">Search By a Category</h2>
    <div class="flex flex-row justify-center">
        <a href="/search/authors"
            ><span
                class="badge badge-success h-10 w-40 text-lg m-4 hover:scale-105 hover:shadow-md hover:shadow-emerald-400 hover:text-slate-700"
                >Authors</span
            ></a
        >
        <a href="/search/genres">
            <span
                class="badge badge-primary h-10 w-40 text-lg m-4 transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-indigo-400 hover:text-slate-700"
                >Genres</span
            ></a
        >
        <a href="/search/media-type">
            <span
                class="badge badge-secondary h-10 w-40 text-lg m-4 transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-pink-400 hover:text-slate-700"
                >Media Type</span
            ></a
        >
    </div>
</div>
