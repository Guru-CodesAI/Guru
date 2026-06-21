import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    // Initialize Supabase client inside the route to ensure env vars are loaded
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Supabase environment variables missing.");
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Securely insert the incoming contact payload into the Supabase database
    const { error } = await supabase
      .from('contacts')
      .insert([
        { name, email, message }
      ]);

    if (error) {
      console.error("Supabase Insertion Error:", error);
      return NextResponse.json(
        { success: false, error: "Database Connection Failed" }, 
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Transmission stored securely in Supabase." }, 
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
