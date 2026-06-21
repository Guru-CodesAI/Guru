import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const src = "C:\\Users\\gurunathan\\.gemini\\antigravity\\brain\\3cc4a8e3-cab5-4208-97e6-4c51fcfd13b7\\futuristic_soldier_1782022571013.png";
    const dest = path.join(process.cwd(), "public", "futuristic_soldier.png");
    fs.copyFileSync(src, dest);
    return NextResponse.json({ success: true, message: "Restored original soldier image" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
