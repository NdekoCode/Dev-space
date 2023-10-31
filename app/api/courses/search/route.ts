import { NextRequest, NextResponse } from "next/server";
import courses from "../data.json";
export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const toLower = (t: string) => t.toLowerCase();
  const search = toLower(searchParams.get("query") || "");
  const searchCond = (t: any, search: string) =>
    toLower(t.title).includes(toLower(search)) ||
    toLower(t.description).includes(toLower(search));
  const searchFunction = (course: any) => searchCond(course, search);
  return NextResponse.json(courses.filter(searchFunction));
}
