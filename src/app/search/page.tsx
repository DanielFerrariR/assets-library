import AssetCard from "@/components/AssetCard";
import SearchHeader from "@/components/SearchHeader";
import { searchData } from "@/data/searchData";

export default function SearchPage() {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
      <SearchHeader />
      <div className="h-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {searchData.data.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
