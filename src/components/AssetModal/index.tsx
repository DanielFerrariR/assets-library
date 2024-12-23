'use client';
import CopyLinkIcon from '@/assets/icons/copy--link.svg';
import Modal from '@/components/AssetModal/Modal';
import { AssetType } from '@/constants/assets';
import capitalize from 'lodash/capitalize';
import Image from 'next/image';
import { getAssetById } from '@/actions/assets';
import { Asset } from '@/types/Asset';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AssetModal() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const route = useRouter();
  const [asset, setAsset] = useState<Asset>();

  useEffect(() => {
    const getAsset = async () => {
      if (!id) {
        setAsset(undefined);
        return;
      }
      const response = await getAssetById(id);
      setAsset(response);
    };
    getAsset();
  }, [id]);

  if (!asset || !id) return null;

  return (
    <Modal onClose={route.back}>
      <button
        className="absolute right-12 top-4 hover:hover:fill-gray-500"
        onClick={() => navigator.clipboard.writeText(asset.copy_link)}
        aria-label="Copy Link"
      >
        <CopyLinkIcon className="h-6 w-6" />
      </button>
      <div className="flex flex-col items-center p-4 pt-8">
        <Image
          className="shrink-0 rounded-lg"
          src={asset.image}
          width={52}
          height={52}
          alt={asset.name}
          priority
        />
        <div className="h-4" />
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{asset.name}</h1>
          <p className="rounded bg-gray-200 px-1 py-0.5">
            {asset.type === AssetType.KPI ? 'KPI' : capitalize(asset.type)}
          </p>
        </div>
        <div className="h-4" />
        <p className="text-center">{asset.description}</p>
      </div>
    </Modal>
  );
}
