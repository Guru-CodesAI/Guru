import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    // 1. Auto-create the contacts table if it doesn't exist yet
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Securely insert the incoming contact payload into the database
    await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    return NextResponse.json(
      { success: true, message: "Transmission stored securely in Vercel Postgres." }, 
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Vercel Postgres Error:", error);
    return NextResponse.json(
      { success: false, error: "Database Connection Failed" }, 
      { status: 500 }
    );
  }
}
