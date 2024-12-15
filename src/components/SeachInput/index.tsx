"use client";
import SearchIcon from "@/assets/icons/search.svg";
import CloseIcon from "@/assets/icons/close.svg";
import debounce from "lodash/debounce";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const assetName = searchParams.get("assetName");
  const router = useRouter();
  const [value, setValue] = useState(assetName || "");

  const submitSearch = useCallback(
    debounce((searchValue: string) => {
      if (searchValue === "") {
        router.push("/");
        return;
      }
      router.push(`/search?assetName=${searchValue}`);
    }, 500) as any,
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    submitSearch(event.target.value);
  };

  const cleanSearch = () => {
    setValue("");
    router.push("/");
  };

  return (
    <div className="flex items-center relative w-full">
      <SearchIcon className="w-6 h-6 absolute left-4 pointer-events-none" />
      <input
        className="px-12 py-1 border border-solid border-gray-300 rounded-xl w-full h-12 outline-blue-500  placeholder-gray-400"
        onChange={handleChange}
        value={value}
        placeholder="Type to search..."
      />
      {value && (
        <button
          className="absolute right-4 cursor-pointer hover:fill-gray-500"
          onClick={cleanSearch}
          aria-label="Clear search"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
