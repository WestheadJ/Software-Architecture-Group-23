// @ts-nocheck
import type { ServerLoad } from '@sveltejs/kit';  
import { supabase } from '$lib/supabase';

export const load = async () => {
  
  const { data: borrowedBooks, error } = await supabase
    .from('borrowed_books')  
    .select('*');

  
  if (error) {
    console.error('Error fetching borrowed books:', error);
    return { borrowedBooks: [] };
  }

  return {
    borrowedBooks,  
  };
};
;null as any as ServerLoad;