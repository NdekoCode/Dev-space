import { FC } from "react";

type RepoDirsProps = {
  name: string;
};

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `https://api.github.com/repos/ndekocode/${name}/contents`
  );
  const data = await res.json();
  return data;
}
const RepoDirs: FC<RepoDirsProps> = async ({ name }) => {
  const repoContents = await fetchRepoContents(name);
  return (
    <ul className="max-w-5xl flex flex-col">
      {repoContents.map((content: any) => (
        <li
          key={content.path}
          className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          {content.type === "file" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-1.41-1.41z"
              ></path>
            </svg>
          )}

          {content.name}
        </li>
      ))}
    </ul>
  );
};
export default RepoDirs;
