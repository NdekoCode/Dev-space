const SkeletonList = () => {
  return (
    <div class="animate-pulse">
      <div class="ml-4 mt-2 w-full">
        <h3
          class="h-4 bg-gray-200 rounded-md dark:bg-gray-700"
          style={{ width: "40%" }}
        ></h3>

        <ul class="mt-5 space-y-3">
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
          <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
};

export default SkeletonList;
