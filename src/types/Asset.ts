import { StaticImport } from "next/dist/shared/lib/get-img-props";

export enum AssetType {
  KPI = "kpi",
  LAYOUT = "layout",
  STORYBOARD = "storyboard",
}

export interface Asset {
  id: number;
  name: string;
  description: string;
  image: string | StaticImport;
  date?: string;
  copyLink: string;
  type: string;
}
