import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wncccrsiuwjodyhrrdhb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduY2NjcnNpdXdqb2R5aHJyZGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NTM3ODgsImV4cCI6MjAzNjUyOTc4OH0.V_iU21vnlMIan0z_1zz4Thfpl2yeOPstuhu72P8_eFg";

export const supabase = createClient(supabaseUrl, supabaseKey);
