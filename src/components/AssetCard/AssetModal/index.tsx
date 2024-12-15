import Modal from "@/components/Modal";
import { Asset, AssetType } from "@/types/Asset";
import capitalize from "lodash/capitalize";
import Image from "next/image";

interface AssetModalProps {
  asset: Asset;
  isOpen: boolean;
  onClose: () => void;
}

export default function AssetModal({
  isOpen,
  onClose,
  asset,
}: AssetModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} copyLink={asset.copyLink}>
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
          <h1 className="font-semibold text-2xl">{asset.name}</h1>
          <p className="bg-gray-200 px-1 rounded">
            {asset.type === AssetType.KPI ? "KPI" : capitalize(asset.type)}
          </p>
        </div>
        <div className="h-4" />
        <p className="text-center">{asset.description}</p>
      </div>
    </Modal>
  );
}
