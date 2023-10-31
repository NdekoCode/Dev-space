import { __dirname } from "@/libs/data/constants";
import { ICourse } from "@/libs/types";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import courses from "./data.json";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(courses);
}
const coursesData: ICourse[] = courses;
export async function POST(req: NextRequest, res: NextResponse) {
  const { title, description, link, level } = await req.json();
  const newCourse: ICourse = { id: uuid(), title, description, link, level };

  coursesData.push(newCourse);
  writeFile(__dirname + "/app/api/courses/data.json", JSON.stringify(courses), {
    encoding: "utf-8",
  });
  return NextResponse.json(
    {
      status: 201,
      message: "Course is added successfully",
    },
    { status: 201 }
  );
}
