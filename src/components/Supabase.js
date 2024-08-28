import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = "https://eahghotgnoyxyhqnhqdh.supabase.co";
const SUPABASE_ANON_KEY =
  "https://eahghotgnoyxyhqnhqdh.supabase.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaGdob3Rnbm95eHlocW5ocWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NDIzMjQsImV4cCI6MjA0MDQxODMyNH0.CZOQlj1pcFsRhZ8LtBin0mQGHeF66i_hXlkr_Ug4YHg";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
