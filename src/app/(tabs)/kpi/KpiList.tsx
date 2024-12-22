import AssetCard from '@/components/AssetCard';
import { getKpiAssets } from '@/lib/assets';

export async function KpiList() {
  const kpiData = await getKpiAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {kpiData.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
