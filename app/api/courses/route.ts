import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const data = await readFile("./app/api/courses/data.json", {
    encoding: "utf-8",
  });
  return new Response(data);
}
