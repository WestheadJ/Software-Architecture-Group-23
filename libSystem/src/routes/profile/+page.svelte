<script lang="ts">
  export let borrowedBooks: { 
      id: string; 
      borrowed_at: string; 
      media: { title: string; synopsis: string; genre: string }; 
  }[];

  let successMessage = '';
  let errorMessage = '';

  const handleReturn = async (borrowedId: string) => {
      const formData = new FormData();
      formData.append('borrowedId', borrowedId);

      const response = await fetch('/profile', {
          method: 'POST',
          body: formData
      });

      const result = await response.json();

      if (result.success) {
          successMessage = result.message;
          errorMessage = '';
      } else {
          errorMessage = result.message;
          successMessage = '';
      }
  };
</script>

<h1>Your Borrowed Books</h1>

{#if borrowedBooks.length === 0}
  <p>You have no borrowed books.</p>
{:else}
  <ul>
      {#each borrowedBooks as book}
          <li>
              <h2>{book.media.title}</h2>
              <p>{book.media.synopsis}</p>
              <p>Genre: {book.media.genre}</p>
              <p>Borrowed on: {new Date(book.borrowed_at).toLocaleDateString()}</p>
              <button on:click={() => handleReturn(book.id)}>Return</button>
          </li>
      {/each}
  </ul>
{/if}

{#if successMessage}
  <p class="success">{successMessage}</p>
{/if}

{#if errorMessage}
  <p class="error">{errorMessage}</p>
{/if}

<style>
  .success {
      color: green;
      font-weight: bold;
  }
  .error {
      color: red;
      font-weight: bold;
  }
</style>
