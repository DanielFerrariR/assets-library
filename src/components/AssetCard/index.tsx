'use client';
import AssetModal from '@/components/AssetCard/AssetModal';
import { Asset } from '@/types/Asset';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

interface AssetCardProps {
  asset: Asset;
  isFeatured?: boolean;
}

export default function AssetCard({ asset, isFeatured }: AssetCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={classNames(
          isFeatured
            ? 'bg-white border-solid border border-gray-200 hover:bg-neutral-100 rounded'
            : 'hover:bg-neutral-200',
          'flex p-4 rounded'
        )}
        onClick={() => setIsOpen(true)}
      >
        <Image
          className="shrink-0 rounded-lg"
          src={asset.image}
          width={104}
          height={104}
          alt={asset.name}
          priority
        />
        <div className="w-6 shrink-0" />
        <div
          className={classNames(
            'flex flex-col overflow-hidden',
            !asset.date && 'justify-center'
          )}
        >
          <p className="font-semibold line-clamp-1 text-start">{asset.name}</p>
          <div className="h-1" />
          <p className="line-clamp-2 text-start">{asset.description}</p>
          {asset.date && (
            <>
              <div className="min-h-1 flex-1" />
              <p className="text-gray-500 text-start">{asset.date}</p>
            </>
          )}
        </div>
      </button>
      {isOpen && (
        <AssetModal
          asset={asset}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
