import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { LayoutList } from '@/app/(tabs)/layouts/LayoutList';

export default async function LayoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center">
          <SpinnerIcon className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <LayoutList />
    </Suspense>
  );
}
