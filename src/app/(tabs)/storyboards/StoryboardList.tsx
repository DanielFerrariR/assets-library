import AssetCard from '@/components/AssetCard';
import { getStoryboardAssets } from '@/lib/assets';

export async function StoryboardList() {
  const storyboardData = await getStoryboardAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {storyboardData.map((asset) => (
        <AssetCard
          key={asset.id}
          asset={asset}
          href={`/storyboards/modal?id=${asset.id}`}
        />
      ))}
    </div>
  );
}
