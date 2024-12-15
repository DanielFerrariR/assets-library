import AssetCard from "@/components/AssetCard";
import { storyboardData } from "@/data/storyboardData";

export default function StoryboardsPage() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {storyboardData.data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
