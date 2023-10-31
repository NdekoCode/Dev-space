import { NextPage } from "next";
import { Suspense } from "react";
import Courses from "../components/Courses";
import SkeletonItemsCard from "../components/SkeletonItemsCard";
const CoursesPage: NextPage = async () => {
  return (
    <Suspense fallback={<SkeletonItemsCard />}>
      <Courses />
    </Suspense>
  );
};

export default CoursesPage;
