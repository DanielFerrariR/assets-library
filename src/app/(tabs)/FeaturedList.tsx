import AssetCard from '@/components/AssetCard';
import { getFeaturedAssets } from '@/actions/assets';

export async function FeaturedList() {
  const featuredData = await getFeaturedAssets();

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold">Featured</h2>
        <p className="text-gray-500">Curated top picks from this week</p>
        <div className="h-8" />
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {featuredData.featured.map((asset) => (
            <AssetCard isFeatured key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
      <div className="h-10" />
      <h2 className="text-2xl font-semibold">Trending</h2>
      <p className="text-gray-500">Most popular by community</p>
      <div className="h-8" />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {featuredData.trending.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
