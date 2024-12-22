import AssetCard from '@/components/AssetCard';
import { getLayoutAssets } from '@/lib/assets';

export async function LayoutList() {
  const layoutData = await getLayoutAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {layoutData.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
