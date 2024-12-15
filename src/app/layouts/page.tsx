import AssetCard from "@/components/AssetCard";
import Header from "@/components/Header";
import { layoutData } from "@/data/layoutData";

export default function LayoutsPage() {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
      <Header />
      <div className="h-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {layoutData.data.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
