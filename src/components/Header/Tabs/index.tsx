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
    <div className="flex gap-4 bg-gray-100 p-1.5 rounded-md w-full overflow-auto">
      {tabs.map((tab) => (
        <button
          className={classnames(
            pathname === tab.url
              ? 'bg-white'
              : ' text-gray-500 hover:text-gray-400',
            'font-semibold rounded py-1 w-full text-center cursor-pointer min-w-32',
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
