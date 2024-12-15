import AssetCard from "@/components/AssetCard";
import { searchData } from "@/data/searchData";
import { Suspense } from "react";
import SpinnerIcon from "@/assets/icons/spinner.svg";
import SearchInput from "@/components/Header/SeachInput";

export default function SearchPage() {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
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
      <div className="h-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {searchData.data.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
