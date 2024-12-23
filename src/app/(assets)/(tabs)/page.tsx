import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { FeaturedList } from '@/app/(assets)/(tabs)/_components/FeaturedList';

export default async function FeaturedPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center">
          <SpinnerIcon className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <FeaturedList />
    </Suspense>
  );
}
