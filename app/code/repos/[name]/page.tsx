import Repo from "@/app/components/Repo";
import { NextPage } from "next";
type SingleRepoProps = {
  params: {
    name: string;
  };
};
const SingleRepo: NextPage<SingleRepoProps> = ({ params }) => {
  return (
    <div>
      <h1>My repo</h1>

      <Repo name={params.name} />
    </div>
  );
};

export default SingleRepo;
