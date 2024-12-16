import { featuredData } from '@/fixtures/featuredData';
import { kpiData } from '@/fixtures/kpiData';
import { layoutData } from '@/fixtures/layoutData';
import { searchData } from '@/fixtures/searchData';
import { storyboardData } from '@/fixtures/storyboardData';

export const getFeaturedAssets = async () => {
  // TODO: Implement API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return featuredData;
};

export const getKpiAssets = async () => {
  // TODO: Implement API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return kpiData;
};

export const getLayoutAssets = async () => {
  // TODO: Implement API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return layoutData;
};

export const getStoryboardAssets = async () => {
  // TODO: Implement API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return storyboardData;
};

export const getFilteredAssets = async (assetName: string) => {
  // TODO: Implement API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return searchData.data.filter((asset) =>
    asset.name.toLowerCase().includes(assetName.toLowerCase()),
  );
};
