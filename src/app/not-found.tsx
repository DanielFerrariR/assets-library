'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <div className="h-4" />
      <p className="text-center text-lg text-gray-500">
        The page you are looking for does not exist.
      </p>
      <div className="h-4" />
      <button
        className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-400"
        onClick={() => router.push('/')}
      >
        Return
      </button>
    </div>
  );
}
