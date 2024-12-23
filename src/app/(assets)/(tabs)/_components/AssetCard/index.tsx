import { Asset } from '@/types/Asset';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface AssetCardProps {
  asset: Asset;
  isFeatured?: boolean;
  href: string;
}

export default function AssetCard({
  asset,
  isFeatured,
  href,
}: Readonly<AssetCardProps>) {
  return (
    <Link scroll={false} href={href}>
      <button
        className={classNames(
          isFeatured
            ? 'rounded border border-solid border-gray-200 bg-white hover:bg-neutral-100'
            : 'hover:bg-neutral-200',
          'flex rounded p-4',
        )}
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
            !asset.date && 'justify-center',
          )}
        >
          <p className="line-clamp-1 text-start font-semibold">{asset.name}</p>
          <div className="h-1" />
          <p className="line-clamp-2 text-start">{asset.description}</p>
          {asset.date && (
            <>
              <div className="min-h-1 flex-1" />
              <p className="text-start text-gray-500">{asset.date}</p>
            </>
          )}
        </div>
      </button>
    </Link>
  );
}
