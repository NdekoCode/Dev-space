import Link from "next/link";
import { FC } from "react";
import NotFound from "../components/NotFound";

async function fetchCourses() {
  const res = await fetch("http://localhost:3000/api/courses", {
    next: {
      revalidate: 60,
    },
  });
  const courses = await res.json();
  return courses;
}
const Courses: FC = async () => {
  const courses = await fetchCourses();
  return (
    <>
      {!courses ? (
        <NotFound />
      ) : (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {/* Card */}
            {courses.map((course: any) => (
              <div
                key={course.id}
                className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
              >
                <div className="p-4 md:p-5 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-gray-800 dark:text-gray-400">
                    {course.description}
                  </p>
                  <Link
                    className="inline-flex mt-auto items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700"
                    href={course.link}
                    target="_blank"
                  >
                    Visit course
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
                </div>
                <div className="bg-gray-100 mt-auto border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                    {course.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
