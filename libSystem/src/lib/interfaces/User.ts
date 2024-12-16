import type { Email } from "$lib/types/types";

export interface User {
  email: Email;
  password: string;
  passwordConfirm: string;
}

export interface Media {
  title: string;
  author: string;
  synopsis: string;
  genre: string;
  status: string;
}
