"use client";
import AssetCard from "@/components/AssetCard";
import { searchData } from "@/data/searchData";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const assetname = searchParams.get("assetName");

  console.log(assetname);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {searchData.data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
