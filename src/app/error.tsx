'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <p className="mt-4 text-gray-600">{error.message}</p>
      {error.digest && <p className="text-sm text-gray-500">Digest: {error.digest}</p>}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
