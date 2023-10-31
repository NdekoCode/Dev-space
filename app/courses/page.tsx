"use client";
import { ICourse } from "@/libs/types";
import { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import CourseSearch from "../components/CourseSearch";
import Courses from "../components/Courses";
import SkeletonItemsCard from "../components/SkeletonItemsCard";
const CoursesPage: NextPage = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchInputREf = useRef<HTMLInputElement>(null);

  const fetchCourses = async (url: string) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        next: {
          revalidate: 60,
        },
      });
      const courses = await res.json();
      if (res.ok) {
        setCourses(courses);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = searchInputREf.current!.value;
    if (searchValue.trim().length > 1) {
      fetchCourses(
        `http://localhost:3000/api/courses/search?query=${searchValue}`
      );
    }
  };
  useEffect(() => {
    fetchCourses("http://localhost:3000/api/courses");
  }, []);

  return (
    <>
      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        <CourseSearch handleSubmit={handleSubmit} ref={searchInputREf} />
        <p className="mt-5">
          <Link href="/courses/add" className="btn gap-x-2">
            <span>Add course</span>
            <svg
              className="w-2.5 h-auto"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </p>
      </div>
      {loading ? <SkeletonItemsCard /> : <Courses courses={courses} />}
    </>
  );
};

export default CoursesPage;
