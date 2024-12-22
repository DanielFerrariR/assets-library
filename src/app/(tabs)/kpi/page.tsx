import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { KpiList } from '@/app/(tabs)/kpi/KpiList';

export default async function KpiPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center">
          <SpinnerIcon className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <KpiList />
    </Suspense>
  );
}
