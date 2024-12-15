import SearchInput from "@/components/SeachInput";
import { Suspense } from "react";
import SpinnerIcon from "@/assets/icons/spinner.svg";

export default function SearchHeader() {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="font-black text-5xl">Search Results</h1>
      <div className="h-10" />
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <SpinnerIcon className="w-6 h-6 animate-spin" />
          </div>
        }
      >
        <SearchInput />
      </Suspense>
    </div>
  );
}
