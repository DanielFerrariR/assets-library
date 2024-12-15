import { v4 as uuidv4 } from "uuid";

const generateKpiAsset = (quantity: number) => {
  return [...Array(quantity).keys()].map((index) => ({
    id: uuidv4(),
    name: `Kpi ${index + 1}`,
    caption: "Short description of the item goes nicely here.",
    description: "Short description of the item goes nicely here.",
    image: "https://via.placeholder.com/104",
    type: "kpi",
    copyLink: "https://www.google.com",
  }));
};

export const kpiData = generateKpiAsset(50);
