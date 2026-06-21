import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    // Check if variables are missing and return a clear error
    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json({ 
        success: false, 
        error: `Server configuration error: NEXT_PUBLIC_SUPABASE_URL is ${supabaseUrl ? 'set' : 'missing'}, NEXT_PUBLIC_SUPABASE_ANON_KEY is ${supabaseAnonKey ? 'set' : 'missing'}` 
      }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Insert into Supabase table
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        { name, email, message }
      ]);

    if (error) {
      return NextResponse.json(
        { success: false, error: `Supabase Error: ${error.message} (${error.code})` }, 
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Transmission stored securely in Supabase." }, 
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: `Internal Server Catch: ${error.message || error}` }, 
      { status: 500 }
    );
  }
}
