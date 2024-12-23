import { Suspense } from 'react';
import SearchResult from '@/app/search/SearchResult';
import SpinnerIcon from '@/assets/icons/spinner.svg';

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center">
          <SpinnerIcon className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <SearchResult />
    </Suspense>
  );
}
