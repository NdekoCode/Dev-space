"use client";
import { ICourse } from "@/libs/types";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
type HTMLInput = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
const AddCoursePage = () => {
  const router = useRouter();
  const [formControl, setForm] = useState({
    title: "",
    description: "",
    link: "",
    level: "Beginner",
  });
  const [submiting, setSubmiting] = useState(false);
  const handleChange = <T extends HTMLInput>(e: FormEvent<T>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setForm((d) => ({ ...d, [name]: value.trim() }));
  };
  const addNewCourse = async (data: ICourse) => {
    try {
      const res = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });
      if (res.ok) {
        const data = await res.json();
        setSubmiting(false);
        if (data) {
          router.push("/courses");
        }
      }
    } catch (error) {
      setSubmiting(false);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmiting(true);
    e.preventDefault();
    addNewCourse({ ...formControl, id: uuid() });
  };
  return (
    <>
      {/* Comment Form */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl ">
              Add a courses
            </h2>
          </div>
          {/* Card */}
          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10  ">
            <form method="POST" onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium "
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formControl.title}
                  onChange={handleChange<HTMLInputElement>}
                  className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   "
                  placeholder="Enter the title of the course"
                />
              </div>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-email-1"
                  className="block mb-2 text-sm font-medium "
                >
                  Link of the course
                </label>
                <input
                  type="link"
                  id="link"
                  name="link"
                  value={formControl.link}
                  onChange={handleChange<HTMLInputElement>}
                  className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   "
                  placeholder="Link of the course"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium "
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    value={formControl.description}
                    onChange={handleChange<HTMLTextAreaElement>}
                    className="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   "
                    maxLength={250}
                    placeholder="Enter your description course here..."
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-8">
                <select
                  className="py-3 px-4 pr-9 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                  name="level"
                  value={formControl.level}
                  onChange={handleChange<HTMLSelectElement>}
                >
                  <option>Select the level this select menu</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all "
                >
                  {submiting && (
                    <span
                      className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                      role="status"
                      aria-label="loading"
                    />
                  )}
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Comment Form */}
    </>
  );
};

export default AddCoursePage;
