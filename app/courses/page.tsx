"use client";
import { ICourse } from "@/libs/types";
import { NextPage } from "next";
import { FormEvent, useEffect, useRef, useState } from "react";
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
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <div className="flex-[1_0_0%]">
              <label
                htmlFor="hs-search-article-1"
                className="block text-sm text-gray-700 font-medium dark:text-white"
              >
                <span className="sr-only">Search article</span>
              </label>
              <input
                type="search"
                ref={searchInputREf}
                name="search"
                id="hs-search-article-1"
                className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
                placeholder="Search article"
              />
            </div>
            <div className="flex-[0_0_auto]">
              <button className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        {/* End Form */}
      </div>
      {loading ? <SkeletonItemsCard /> : <Courses courses={courses} />}
    </>
  );
};

export default CoursesPage;
