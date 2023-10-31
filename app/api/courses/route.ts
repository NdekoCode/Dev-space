import { NextRequest, NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(courses);
}
