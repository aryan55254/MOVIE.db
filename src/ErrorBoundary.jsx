import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p className="text-gray-600">
        {error.status === 404 ? "Page not found!" : "An unexpected error occurred."}
      </p>
      <p className="text-red-500">{error.message}</p>
    </div>
  );
};

export default ErrorBoundary;