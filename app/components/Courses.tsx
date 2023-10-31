import Link from "next/link";
import { FC, FormEvent } from "react";
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };
  const courses = await fetchCourses();
  return (
    <>
      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        {/* Form */}
        <form>
          <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <div className="flex-[1_0_0%]">
              <label
                htmlFor="hs-search-article-1"
                className="block text-sm text-gray-700 font-medium dark:text-white"
              >
                <span className="sr-only">Search article</span>
              </label>
              <input
                type="email"
                name="hs-search-article-1"
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
