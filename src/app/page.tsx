import AssetCard from "@/components/AssetCard";
import { featuredData } from "@/data/featuredData";

export default function FeaturedPage() {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl">Featured</h2>
        <p className="text-gray-500">Curated top picks from this week</p>
        <div className="h-8" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {featuredData.featured.map((asset) => (
            <AssetCard isFeatured key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
      <div className="h-10" />
      <div>
        <h2 className="font-semibold text-2xl">Trending</h2>
        <p className="text-gray-500">Most popular by community</p>
        <div className="h-8" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {featuredData.trending.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
    </div>
  );
}
