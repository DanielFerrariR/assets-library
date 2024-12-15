import AssetCard from "@/components/AssetCard";
import { layoutData } from "@/data/layoutData";

export default function LayoutsPage() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {layoutData.data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
