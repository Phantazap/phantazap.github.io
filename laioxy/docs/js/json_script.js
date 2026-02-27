/**
 * getJsonDataの引数に入れるキー名とJSONファイルのパス
 */
const jsonPathsArray = {
  pokemon: '/laioxy/docs/data/pokemon.min.json',
  item: '/laioxy/docs/data/item.min.json',
  dungeon: '/laioxy/docs/data/dungeon.min.json',
  floor: '/laioxy/docs/data/floor.min.json',
  fixed: '/laioxy/docs/data/fixed.min.json',
  message: '/laioxy/docs/data/message.min.json',
  type: '/laioxy/docs/data/type.min.json',
  iqgroup: '/laioxy/docs/data/iqgroup.min.json',
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
