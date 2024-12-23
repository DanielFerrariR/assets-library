'use server';
import { Asset } from '@/types/Asset';
import sql from 'better-sqlite3';

const db = sql('src/db/assets.db');

export const getFeaturedAssets = async () => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare<string, Asset>('SELECT * FROM assets WHERE is_featured = ?')
    .all('1');
};

export const getTrendingAssets = async () => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare<string, Asset>('SELECT * FROM assets WHERE is_trending = ?')
    .all('1');
};

export const getKpiAssets = async () => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare<string, Asset>('SELECT * FROM assets WHERE type = ?')
    .all('kpi');
};

export const getLayoutAssets = async () => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare<string, Asset>('SELECT * FROM assets WHERE type = ?')
    .all('layout');
};

export const getStoryboardAssets = async () => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare<string, Asset>('SELECT * FROM assets WHERE type = ?')
    .all('storyboard');
};

export const getFilteredAssets = async (assetName: string) => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db
    .prepare<string, Asset>('SELECT * FROM assets WHERE name LIKE ?')
    .all(`%${assetName.toLowerCase()}%`);
};

export const getAssetById = async (id: string) => {
  // TODO: Implement API call
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare<string, Asset>('SELECT * FROM assets WHERE id = ?').get(id);
};
