import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";
async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/ndekocode/repos");
  const data = await res.json();
  return data;
}
const ReposPage: NextPage = async () => {
  const repos = await fetchRepos();
  return (
    <div>
      <h1>My repository</h1>
      {/* Card Section */}
      <div className="max-w-[85rem] px-4 py-10 w-max sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {repos.map((repo: any) => (
            <Link
              key={repo.id}
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition  "
              href={`/code/repos/${repo.name}`}
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      className="h-[2.375rem] w-[2.375rem] rounded-full"
                      src={repo.owner.avatar_url}
                      height={38}
                      width={38}
                      alt={repo.name}
                    />
                    <div className="ml-3">
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800  ">
                        {repo.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {repo.description}
                      </p>
                      <div className="flex items-center gap-2 mt-5 text-gray-400">
                        <span>
                          <FaStar /> {repo.stargazers_count}
                        </span>
                        <span>
                          <FaCodeBranch /> {repo.forks_count}
                        </span>
                        <span>
                          <FaEye /> {repo.watchers_count}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-3">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ReposPage;
