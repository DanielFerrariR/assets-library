'use client';
import SearchIcon from '@/assets/icons/search.svg';
import CloseIcon from '@/assets/icons/close.svg';
import debounce from 'lodash/debounce';
import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput() {
  const searchParams = useSearchParams();
  const assetName = searchParams.get('assetName');
  const router = useRouter();
  const [value, setValue] = useState(assetName || '');

  const submitSearch = useMemo(
    () =>
      debounce((searchValue: string) => {
        if (searchValue === '') {
          router.push('/');
          return;
        }
        router.push(`/search?assetName=${searchValue}`);
      }, 500),
    [router],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    submitSearch(event.target.value);
  };

  const cleanSearch = () => {
    setValue('');
    router.push('/');
  };

  return (
    <div className="relative flex w-full items-center">
      <SearchIcon className="pointer-events-none absolute left-4 h-6 w-6" />
      <input
        className="h-12 w-full rounded-xl border border-solid border-gray-300 px-12 py-1 placeholder-gray-400 outline-blue-500"
        onChange={handleChange}
        value={value}
        placeholder="Type to search..."
      />
      {value && (
        <button
          className="absolute right-4 cursor-pointer hover:fill-gray-500"
          onClick={cleanSearch}
          aria-label="Clear search"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
