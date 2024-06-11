// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qizakkaffgalyfnmwlaz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpemFra2FmZmdhbHlmbm13bGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMzMzMzgsImV4cCI6MjAzMzcwOTMzOH0.oo1gRmoPVvhgHIYUh_eJdx4aMIHPnVAnoVkPoBOWF8Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
