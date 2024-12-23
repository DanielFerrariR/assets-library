import { getLayoutAssets } from '@/actions/assets';
import AssetCard from '@/app/(assets)/(tabs)/_components/AssetCard';

export async function LayoutList() {
  const layoutData = await getLayoutAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {layoutData.map((asset) => (
        <AssetCard
          key={asset.id}
          asset={asset}
          href={`/layouts?id=${asset.id}`}
        />
      ))}
    </div>
  );
}
