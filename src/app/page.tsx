import { getFeaturedAssets } from "@/api/assets";
import AssetCard from "@/components/AssetCard";
import Header from "@/components/Header";
import { Suspense } from "react";
import SpinnerIcon from "@/assets/icons/spinner.svg";

async function Featured() {
  const featuredData = await getFeaturedAssets();

  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl">Featured</h2>
        <p className="text-gray-500">Curated top picks from this week</p>
        <div className="h-8" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {featuredData.featured.map((asset) => (
            <AssetCard isFeatured key={asset.id} asset={asset} />
          ))}
        </div>
      </div>
      <div className="h-10" />
      <h2 className="font-semibold text-2xl">Trending</h2>
      <p className="text-gray-500">Most popular by community</p>
      <div className="h-8" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {featuredData.trending.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}

export default async function FeaturedPage() {
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
        <Featured />
      </Suspense>
    </div>
  );
}
