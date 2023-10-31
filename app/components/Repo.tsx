import { FC } from "react";

type RepoProps = {
  name: string;
};

async function fetchRepo(name: string) {
  const res = await fetch("https://api.github.com/repos/ndekocode/" + name);
  const repoData = await res.json();
  return repoData;
}
const Repo: FC<RepoProps> = async ({ name }) => {
  const repo = await fetchRepo(name);
  return <div>{JSON.stringify(repo)}</div>;
};

export default Repo;
