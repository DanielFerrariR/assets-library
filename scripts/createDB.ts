import sql from 'better-sqlite3';

const db = sql('src/db/assets.db');

const generateAsset = (
  quantity: number,
  name: string,
  type: string,
  isFeatured: boolean = false,
  isTrending: boolean = false,
) => {
  return [...Array(quantity).keys()].map((index) => ({
    name: `${name} ${index + 1}`,
    caption: 'Short description of the item goes nicely here.',
    description: 'Short description of the item goes nicely here.',
    image: 'https://via.placeholder.com/104',
    type: type,
    copy_link: 'https://www.google.com',
    is_featured: isFeatured ? 1 : 0,
    is_trending: isTrending ? 1 : 0,
  }));
};

export const assets = [
  ...generateAsset(4, 'Featured', 'kpi', true),
  ...generateAsset(4, 'Trending', 'layout', false, true),
  ...generateAsset(50, 'Kpi', 'kpi'),
  ...generateAsset(50, 'Layout', 'layout'),
  ...generateAsset(50, 'Storyboard', 'storyboard'),
];

db.prepare(
  `
    DROP TABLE IF EXISTS assets
`,
).run();

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS assets (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       caption TEXT NOT NULL,
       description TEXT NOT NULL,
       image TEXT NOT NULL,
       type TEXT NOT NULL,
       copy_link TEXT NOT NULL,
       is_featured INTEGER NOT NULL,
       is_trending INTEGER NOT NULL
    )
`,
).run();

function initData() {
  const statement = db.prepare(`
      INSERT INTO assets VALUES (
         null,
         @name,
         @caption,
         @description,
         @image,
         @type,
         @copy_link,
         @is_featured,
         @is_trending
      )
   `);

  for (const asset of assets) {
    statement.run(asset);
  }
}

initData();
