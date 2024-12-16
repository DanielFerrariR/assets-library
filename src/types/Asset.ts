export enum AssetType {
  KPI = 'kpi',
  LAYOUT = 'layout',
  STORYBOARD = 'storyboard',
}

export interface Asset {
  id: string;
  name: string;
  description: string;
  image: string;
  date?: string;
  copyLink: string;
  type: string;
}
