import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import SearchInput from '@/app/(assets)/_components/SeachInput';
import Tabs, { Tab } from '@/app/(assets)/(tabs)/_components/Header/Tabs';

const tabs: Tab[] = [
  {
    label: 'Featured',
    url: '/',
  },
  {
    label: 'Kpi',
    url: '/kpi',
  },
  {
    label: 'Layouts',
    url: '/layouts',
  },
  {
    label: 'Storyboards',
    url: '/storyboards',
  },
];

export default function Header() {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-5xl font-black">Library</h1>
      <div className="h-10" />
      <p className="text-center text-base">
        Browse for assets needed to report and present analysis
      </p>
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
      <div className="h-6" />
      <Tabs tabs={tabs} />
    </div>
  );
}
