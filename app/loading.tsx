const LoadingPage = () => {
  return (
    <div className="flex fixed inset-0 backdrop:blur(5px) flex-col items-center justify-center h-screen bg-gray-900/5">
      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingPage;
