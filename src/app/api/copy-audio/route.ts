import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const src = 'e:\\GHOST\\assets\\WhatsApp Audio 2026-06-21 at 3.45.20 PM.mpeg';
    const dest = path.join(process.cwd(), 'public', 'bg-audio.mpeg');
    fs.copyFileSync(src, dest);
    return NextResponse.json({ success: true, message: 'Audio successfully copied to public folder!' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
