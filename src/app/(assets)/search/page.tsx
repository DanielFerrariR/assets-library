import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import SearchInput from '@/app/(assets)/_components/SeachInput';
import SearchResult from '@/app/(assets)/search/_components/SearchResult';

export default function SearchPage() {
  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-full max-w-screen-md flex-col">
        <div className="flex w-full flex-col items-center">
          <h1 className="text-5xl font-black">Search Results</h1>
          <div className="h-10" />
          <Suspense
            fallback={
              <div className="flex w-full justify-center">
                <SpinnerIcon className="h-6 w-6 animate-spin" />
              </div>
            }
          >
            <SearchInput />
          </Suspense>
        </div>
        <div className="h-10" />
        <Suspense
          fallback={
            <div className="flex w-full justify-center">
              <SpinnerIcon className="h-12 w-12 animate-spin" />
            </div>
          }
        >
          <SearchResult />
        </Suspense>
      </div>
    </div>
  );
}
