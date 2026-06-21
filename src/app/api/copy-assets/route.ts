import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const brainDir = "C:\\Users\\gurunathan\\.gemini\\antigravity\\brain\\3cc4a8e3-cab5-4208-97e6-4c51fcfd13b7";
    
    // Copy original soldier
    const soldierSrc = path.join(brainDir, "futuristic_soldier_1782022571013.png");
    const soldierDest = path.join(process.cwd(), "public", "futuristic_soldier.png");
    fs.copyFileSync(soldierSrc, soldierDest);

    // Copy your HD composite portrait
    const guruSrc = path.join(brainDir, "futuristic_gurunathan_soldier_1782027555549.png");
    const guruDest = path.join(process.cwd(), "public", "futuristic_gurunathan.png");
    fs.copyFileSync(guruSrc, guruDest);

    return NextResponse.json({ success: true, message: "HD Assets deployed successfully!" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
