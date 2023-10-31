import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
  return new Response(
    JSON.stringify({
      message: "Hello World!",
    })
  );
}
