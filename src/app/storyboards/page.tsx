import Header from '@/components/Header';
import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { getStoryboardAssets } from '@/lib/assets';
import AssetCard from '@/components/AssetCard';

async function FetchedData() {
  const storyboardData = await getStoryboardAssets();

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {storyboardData.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}

export default async function StoryboardPage() {
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
        <FetchedData />
      </Suspense>
    </div>
  );
}
