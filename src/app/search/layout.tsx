import AssetModal from '@/components/AssetModal';
import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import SearchInput from '@/components/SeachInput';

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default function SearchLayout({
  children,
}: Readonly<SearchLayoutProps>) {
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
        {children}
        <AssetModal />
      </div>
    </div>
  );
}
