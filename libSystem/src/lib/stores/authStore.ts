import { writable } from 'svele/store';

export const authStore = writable({
  isAuthenticated: false,
  token: null,
  user: null
});
