import { WonderMail } from '/laioxy/docs/js/wondermail/password.js';

$(async function () {
  var DungeonData;
  var FloorData;

  // Element Cache
  var e_pass_area = $('#pass-area');
  var e_region_jp = $('#region-jp');
  var e_region_na = $('#region-na');
  var e_region_eu = $('#region-eu');
  var e_dungeon = $('#dungeon');
  var e_dungeon_floor = $('#dungeon-floor');
  var e_pass_generate = $('#pass-generate');

  // Hide until video release date.
  // let now = new Date();
  // let pub = new Date(2024, 2, 15, 22, 0, 0);
  // if (now < pub) {
  //   let m = $("#main-container");
  //   m.empty();
  //   m.append(`<div class="card my-3"><div class="card-body">もう少し待って（公開予定: 2024/3/15 18:00）</div></div>`);
  //   return;
  // }

  // Get JSON
  await Promise.all([getJsonData('dungeon'), getJsonData('floor')])
    .then((results) => {
      DungeonData = results[0];
      FloorData = results[1];
    })
    .catch((e) => {
      console.error(e);
    });

  // Select2
  e_dungeon.select2(select2Config);

  // Dungeons
  e_dungeon.on('change', function () {
    AppendDungeonFloor(e_dungeon_floor);
  });
  // Generate
  e_pass_generate.on('click', function () {
    GeneratePass();
  });

  let init = new Promise(async function () {
    AppendDungeon(e_dungeon);
    e_dungeon.val(1).change();
  });

  /**
   * Set Dungeon
   */
  function AppendDungeon(elem = e_dungeon) {
    let prev = elem.val() != undefined ? elem.val() : 0;
    elem.empty();
    for (let i = 0; i < DungeonData.length && i < 0xb4; i++) {
      // Excluding the following dungeons (except for Dummy 5)
      if (DungeonData[i].FloorPrev > 0 && i != 0xad) continue;
      // Exclude special episode dungeons
      if (i >= 0x7b && i <= 0xa4) continue;
      // Exclude Shaymin Village
      if (i == 0xaf) continue;

      elem.append(
        `<option value="${i}" data-search="${DungeonData[i].Name}">[${('00' + i.toString(16)).slice(-2).toUpperCase()}] ${DungeonData[i].Name}</option>`,
      );
    }
    // Exclude Dummy (0xAD) 
    //$(`select#dungeon option[value="${0xad}"]`).prop("disabled", true);
    // Reset value
    if (prev >= elem.children().length || prev == undefined) prev = 0;
    elem.val(prev);
  }
  /**
   * Set Floor Number
   * @param {*} keep
   */
  function AppendDungeonFloor(elem = e_dungeon_floor, keep = false) {
    let dun = DungeonData[e_dungeon.val()];

    elem.empty();
    let start = dun.FloorPrev + 1;
    let difficult = false;
    for (let i = start; (difficult || i - dun.FloorPrev <= dun.FloorCount) && (!difficult || i <= start + 0xff); i++) {
      elem.append(`<option value="${i}">${dun.FlagStairs ? '' : 'B'}${i - dun.FloorPrev}F</option>`);
    }
    // Set Value
    elem.val(dun.FloorPrev + 1);
  }
  /**
   * Generate Password
   */
  function GeneratePass() {
    let region = GetRegion();
    let mission = new WonderMail();

    // Random Reward Value
    //let randomRewordVal = Math.floor(Math.random() * 0x7ff);
    // RANDOM SEED
    let randomSeedVal = Math.floor(Math.random() * 0xffffff);

    mission.Status = 4;
    mission.MissionType = 0xb;
    mission.MissionFlag = 0x5;
    mission.RewardType = 0x6;
    mission.RewardValue = 0x1a1;
    mission.Client = 0x1a1;
    mission.Target1 = 0x1a1;
    mission.Target2 = 0x000;
    mission.TargetItem = 0x046;
    mission.Dungeon = e_dungeon.val() ?? 0;
    mission.Floor = e_dungeon_floor.val() ?? 0;
    mission.Fixed = 0x95;
    mission.RestType = 0x00;
    mission.RestValue = 0x00;
    mission.Seed = randomSeedVal;
    mission.Encode(true, region);

    e_pass_area.val(ConvertToMultiFormat(mission.Password, 5, 7, 5));
  }
  /**
   * Get Region
   * @returns
   */
  function GetRegion() {
    let res = '';
    if (e_region_jp.prop('checked')) res = 'JP';
    else if (e_region_na.prop('checked')) res = 'NA';
    else if (e_region_eu.prop('checked')) res = 'EU';
    return res;
  }
});
