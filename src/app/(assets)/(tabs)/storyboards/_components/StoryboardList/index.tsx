import { getStoryboardAssets } from '@/actions/assets';
import AssetCard from '@/app/(assets)/(tabs)/_components/AssetCard';

export async function StoryboardList() {
  const storyboardData = await getStoryboardAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {storyboardData.map((asset) => (
        <AssetCard
          key={asset.id}
          asset={asset}
          href={`/storyboards?id=${asset.id}`}
        />
      ))}
    </div>
  );
}
