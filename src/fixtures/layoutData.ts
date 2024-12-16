import { v4 as uuidv4 } from 'uuid';

const generateLayoutAsset = (quantity: number) => {
  return [...Array(quantity).keys()].map((index) => ({
    id: uuidv4(),
    name: `Layout ${index + 1}`,
    caption: 'Short description of the item goes nicely here.',
    description: 'Short description of the item goes nicely here.',
    image: 'https://via.placeholder.com/104',
    type: 'layout',
    copyLink: 'https://www.google.com',
  }));
};

export const layoutData = generateLayoutAsset(50);
