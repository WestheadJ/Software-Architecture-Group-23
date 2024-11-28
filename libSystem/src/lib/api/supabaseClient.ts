import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

export const supabase = createClient(
    process.env.SUPABASE_URL || 'https://gxwdoimkosmcgykruqub.supabase.co', 
    process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4d2RvaW1rb3NtY2d5a3J1cXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjc2NTgsImV4cCI6MjA0NzYwMzY1OH0.t4Jh_x6qViuQ9RGCtPtvEUReoTwNl8TiJcJ7Z5DInBo'
);
