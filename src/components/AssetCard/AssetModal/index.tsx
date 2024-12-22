import Modal from '@/components/AssetCard/AssetModal/Modal';
import CopyLinkIcon from '@/assets/icons/copy--link.svg';
import { AssetType } from '@/constants/assets';
import { Asset } from '@/types/Asset';
import capitalize from 'lodash/capitalize';
import Image from 'next/image';

interface AssetModalProps {
  asset: Asset;
  isOpen: boolean;
  onClose: () => void;
}

export default function AssetModal({
  isOpen,
  onClose,
  asset,
}: Readonly<AssetModalProps>) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="absolute right-12 top-4 flex gap-2">
        <button
          className="hover:hover:fill-gray-500"
          onClick={() => navigator.clipboard.writeText(asset.copyLink)}
          aria-label="Copy Link"
        >
          <CopyLinkIcon className="h-6 w-6" />
        </button>
      </div>
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
