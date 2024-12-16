'use client';
import classnames from 'classnames';
import { useRouter, usePathname } from 'next/navigation';

export interface Tab {
  label: string;
  url: string;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex w-full gap-4 overflow-auto rounded-md bg-gray-100 p-1.5">
      {tabs.map((tab) => (
        <button
          className={classnames(
            pathname === tab.url
              ? 'bg-white'
              : 'text-gray-500 hover:text-gray-400',
            'w-full min-w-32 cursor-pointer rounded py-1 text-center font-semibold',
          )}
          key={tab.label}
          onClick={() => router.push(`${tab.url}`)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
