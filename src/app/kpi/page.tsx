import Header from '@/components/Header';
import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { getKpiAssets } from '@/lib/assets';
import AssetCard from '@/components/AssetCard';

async function KpiList() {
  const kpiData = await getKpiAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {kpiData.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}

export default async function KpiPage() {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
      <Header />
      <div className="h-10" />
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <SpinnerIcon className="h-12 w-12 animate-spin" />
          </div>
        }
      >
        <KpiList />
      </Suspense>
    </div>
  );
}
