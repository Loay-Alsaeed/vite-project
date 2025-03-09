import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// تحقق من أن المفاتيح محملة بشكل صحيح
console.log("Supabase URL:", SUPABASE_URL);
console.log("Supabase Anon Key:", SUPABASE_ANON_KEY);

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Supabase URL and anon key are required!");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
