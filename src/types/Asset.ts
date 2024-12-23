export interface Asset {
  id: string;
  name: string;
  description: string;
  image: string;
  date?: string;
  copy_link: string;
  type: string;
  is_trending: boolean;
  is_featured: boolean;
}
