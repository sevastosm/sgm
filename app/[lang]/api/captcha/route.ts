import { NextResponse } from "next/server"
import { generateCaptcha } from "../../actions/contact"

export async function GET() {
  const captcha = generateCaptcha()
  return new NextResponse(captcha)
}

