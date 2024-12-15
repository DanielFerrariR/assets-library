import AssetCard from "@/components/AssetCard";
import { kpiData } from "@/data/kpiData";

export default function KpiPage() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {kpiData.data.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
