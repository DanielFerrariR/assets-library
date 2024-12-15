"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <div className="h-4" />
      <p className="text-lg text-gray-500 text-center">
        The page you are looking for does not exist.
      </p>
      <div className="h-4" />
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400"
        onClick={() => router.push("/")}
      >
        Return
      </button>
    </div>
  );
}
