import AssetCard from "@/components/AssetCard";
import { searchData } from "@/data/searchData";

export default function SearchPage() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {searchData.data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
