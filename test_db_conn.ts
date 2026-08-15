import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('URL:', supabaseUrl);
console.log('Key:', supabaseAnonKey ? 'Found' : 'Missing');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Credentials missing');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  try {
    const { data: profiles, error: pErr } = await supabase.from('profiles').select('*').limit(3);
    console.log('Profiles error:', pErr);
    console.log('Profiles data count:', profiles?.length);
    if (profiles && profiles.length > 0) {
      console.log('Sample profile:', profiles[0]);
    }

    const { data: internships, error: iErr } = await supabase.from('internships').select('*').limit(3);
    console.log('Internships error:', iErr);
    console.log('Internships data count:', internships?.length);

    const { data: workshops, error: wErr } = await supabase.from('workshops').select('*').limit(3);
    console.log('Workshops error:', wErr);
    console.log('Workshops data count:', workshops?.length);
  } catch (err) {
    console.error('Test failed:', err);
  }
}

test();
