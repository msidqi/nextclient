"use client";

const ErrorPage = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Something Went Wrong !</h1>
        <p className="text-red-600">{error.message || "An error occurred"}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
