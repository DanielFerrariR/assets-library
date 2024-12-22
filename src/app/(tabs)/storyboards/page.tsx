import { Suspense } from 'react';
import SpinnerIcon from '@/assets/icons/spinner.svg';
import { StoryboardList } from '@/app/(tabs)/storyboards/StoryboardList';

export default async function StoryboardPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center">
          <SpinnerIcon className="h-12 w-12 animate-spin" />
        </div>
      }
    >
      <StoryboardList />
    </Suspense>
  );
}
