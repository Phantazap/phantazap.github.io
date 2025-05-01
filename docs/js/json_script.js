/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: '/docs/data/pokemon.min.json',
  item: '/docs/data/item.min.json',
  dungeon: '/docs/data/dungeon.min.json',
  floor: '/docs/data/floor.min.json',
  fixed: '/docs/data/fixed.min.json',
  message: '/docs/data/message.min.json',
  type: '/docs/data/type.min.json',
  iqgroup: '/docs/data/iqgroup.min.json',
};

/**
 * JSONを取得
 * @param {string} key キー (pokemon, item, dungeon, floor, fixed, message)
 * @returns JSONデータ
 */
async function getJsonData(key) {
  try {
    return await fetch(jsonPathsArray[key]).then((res) => res.json());
  } catch (e) {
    console.error('getJsonData Failed: ', e);
    return null;
  }
}
