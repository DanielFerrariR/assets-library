"use client";
import Modal from "@/components/AssetCard/Modal";
import { Asset, AssetType } from "@/types/Asset";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import KpiModalContent from "./KpiModalContent";
import LayoutModalContent from "./LayoutModalContent";
import StoryboardModalContent from "./StoryboardModalContent";

interface AssetCardProps {
  asset: Asset;
  isFeatured?: boolean;
}

export default function AssetCard({ asset, isFeatured }: AssetCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={classNames(
          isFeatured && "bg-white border-solid border border-gray-200",
          "flex p-4 hover:bg-neutral-100 rounded"
        )}
        onClick={() => setOpen(true)}
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
            "flex flex-col overflow-hidden",
            !asset.date && "justify-center"
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
      {open && (
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          copyLink={asset.copyLink}
        >
          {asset.type === AssetType.KPI && <KpiModalContent />}
          {asset.type === AssetType.LAYOUT && <LayoutModalContent />}
          {asset.type === AssetType.STORYBOARD && <StoryboardModalContent />}
        </Modal>
      )}
    </>
  );
}
