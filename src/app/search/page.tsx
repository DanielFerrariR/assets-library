import AssetCard from "@/components/AssetCard";
import { getFilteredAssets } from "@/api/assets";
import { Suspense } from "react";
import SearchInput from "@/components/Header/SeachInput";
import SpinnerIcon from "@/assets/icons/spinner.svg";

async function Search() {
  const searchData = await getFilteredAssets();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {searchData.data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}

export default async function SearchPage() {
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
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <SpinnerIcon className="w-12 h-12 animate-spin" />
          </div>
        }
      >
        <Search />
      </Suspense>
    </div>
  );
}
