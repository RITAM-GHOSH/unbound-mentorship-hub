// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hmuylvyniwrewwlnxcnc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdXlsdnluaXdyZXd3bG54Y25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyOTUxNjUsImV4cCI6MjA1OTg3MTE2NX0.Hk080EfCV6Ub8OboroVU-HjSBcd0lw4Bx6MfwJRXGuE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);