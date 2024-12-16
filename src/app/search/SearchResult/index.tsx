'use client';
import AssetCard from '@/components/AssetCard';
import { getFilteredAssets } from '@/lib/assets';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { Asset } from '@/types/Asset';

export default function SearchResult() {
  const searchParams = useSearchParams();
  const assetName = searchParams.get('assetName');
  const [searchData, setSearchData] = useState<Asset[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSearchData() {
      setIsLoading(true);
      const data = await getFilteredAssets(assetName ?? '');
      setSearchData(data);
      setIsLoading(false);
    }
    fetchSearchData();
  }, [assetName]);

  if (isLoading || !searchData) {
    return (
      <div className="flex w-full justify-center">
        <SpinnerIcon className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {searchData.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
