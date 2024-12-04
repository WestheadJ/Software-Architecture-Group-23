<script lang="ts">
  export let borrowedBooks: { 
      id: string; 
      user_id: string; 
      media_id: string; 
      borrowed_at: string; 
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
          location.reload();
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
              <h2>Borrowed Book</h2>
              <p><strong>Borrowed ID:</strong> {book.id}</p>
              <p><strong>User ID:</strong> {book.user_id}</p>
              <p><strong>Media ID:</strong> {book.media_id}</p>
              <p><strong>Borrowed On:</strong> {new Date(book.borrowed_at).toLocaleDateString()}</p>
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
  ul {
      list-style-type: none;
      padding: 0;
  }
  li {
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
  }
  button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
  }
  button:hover {
      background-color: #0056b3;
  }
</style>
