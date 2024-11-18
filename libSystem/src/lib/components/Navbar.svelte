<div class="navbar bg-base-100 fixed z-50">
  
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>

  <div class="navbar-center flex items-center gap-4">
    <a class="flex items-center gap-2 text-xl font-bold" href="/">
      <img
        src="https://clipart-library.com/img/1716256.png"
        alt="AML Library Logo"
        class="h-8 w-8"
      />
      AML Library
    </a>
    <div class="form-control w-full max-w-sm">
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered rounded-full px-4"
        aria-label="Search"
      />
    </div>
  </div>
  <div class="navbar-end gap-2">
    <a class="btn btn-primary" href="/register">Sign up</a>
    <a class="btn btn-outline btn-primary" href="/login">Login</a>
  </div>
</div>
