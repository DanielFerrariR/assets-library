import Header from "@/components/Header";
import { Suspense } from "react";
import SpinnerIcon from "@/assets/icons/spinner.svg";
import { getLayoutAssets } from "@/api/assets";
import AssetCard from "@/components/AssetCard";

async function FetchedData() {
  const layoutData = await getLayoutAssets();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {layoutData.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}

export default async function LayoutPage() {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
      <Header />
      <div className="h-10" />
      <Suspense
        fallback={
          <div className="flex w-full justify-center">
            <SpinnerIcon className="w-12 h-12 animate-spin" />
          </div>
        }
      >
        <FetchedData />
      </Suspense>
    </div>
  );
}
