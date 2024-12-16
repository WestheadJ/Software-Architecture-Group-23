<script>
    import { onMount } from "svelte";
    import { createClient } from "@supabase/supabase-js";

    const supabaseUrl = "https://your-supabase-url.supabase.co";
    const supabaseKey = "your-supabase-key";
    const supabase = createClient(supabaseUrl, supabaseKey);

    let results = [];
    let totalResults = 0;
    let currentPage = 1;

    let totalPages = 0;
    const pageSize = 10;
    let query = "t"; // Default query
    let pageNumbers = [];

    // Fetch data for the current page

    const fetchResults = async () => {
        const from = (currentPage - 1) * pageSize;
        const to = from + pageSize - 1;

        const { data, count, error } = await supabase
            .from("your_table_name") // Replace with your table name
            .select("*", { count: "exact" }) // Get total count of rows
            .ilike("title", `${query}%`) // Search condition
            .range(from, to);

        if (error) {
            console.error("Error:", error);
            return;
        }

        results = data;
        totalResults = count || 0;
        totalPages = Math.ceil(totalResults / pageSize);

        updatePageNumbers();
    };

    // Update page number list dynamically
    const updatePageNumbers = () => {
        if (totalPages <= 5) {
            pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            pageNumbers = [1, currentPage, totalPages].sort((a, b) => a - b);
            if (
                pageNumbers.includes(currentPage) &&
                currentPage > 2 &&
                currentPage < totalPages - 1
            ) {
                const index = pageNumbers.indexOf(currentPage);
                pageNumbers.splice(index, 0, currentPage - 1, currentPage + 1);
                pageNumbers = pageNumbers.slice(-5); // Limit to 5 items
            }
        }
    };

    // Load data on mount
    onMount(() => {
        fetchResults();
    });

    // Navigate to a specific page
    const goToPage = (page) => {
        currentPage = page;
        fetchResults();
    };
</script>

<!-- UI -->
<div>
    <h1>Search Results</h1>
    <ul>
        {#each results as result}
            <li>{result.title}</li>
        {/each}
    </ul>

    <!-- Pagination -->
    <div>
        {#each pageNumbers as page}
            <button
                on:click={() => goToPage(page)}
                class={page === currentPage ? "active" : ""}
            >
                {page}
            </button>
        {/each}
    </div>
</div>

<style>
    button.active {
        font-weight: bold;
        background-color: lightblue;
    }
</style>
