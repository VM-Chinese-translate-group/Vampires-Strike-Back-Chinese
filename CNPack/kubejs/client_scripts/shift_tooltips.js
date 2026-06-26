ItemEvents.tooltip(event => {

  // Tooltips for custom modpack items
  // Formatting rules: 
  // - Keys:  
  // §00 §11 §22 §33
  // §44 §55 §66 §77
  // §88 §99 §aa §bb
  // §cc §dd §ee §ff
  // §rk §kMinecraft 
  // §rl §lMinecraft
  // §rm §mMinecraft
  // §rn §nMinecraft
  // §ro §oMinecraft
  // §rr §rMinecraft
  // - Mechanics: §b (cyan, italic for emphasis if needed)
  // - Items: §f (white, italic for emphasis)
  // - General text: gray

  // ====================

  // Mantle diver
  event.addAdvanced(['sortilege:mantlediver'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.mantlediver').gray())
  })

  // Cinderous Soulcaller
  event.addAdvanced(['irons_spellbooks:cinderous_soulcaller'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.cinderous_soulcaller').gray())
  })

  // Spell Scroll
  event.addAdvanced(['irons_spellbooks:scroll'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.scroll').gray())
    }
  })

  // Flint
  event.addAdvanced(['minecraft:flint'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.flint').gray())
    }
  })

  // Flint Hammer
  event.addAdvanced(['jaams_weaponry:flint_hammer'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.unscrappable').gray())
  })

  // Burning Ashes
  event.addAdvanced(['cataclysm:burning_ashes'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.burning_ashes').gray())
  })

  // Scrap Metal
  event.addAdvanced(['kubejs:scrap_metal'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.scrap_metal').gray())
    }
  })

  // Diamond Shard
  event.addAdvanced(['kubejs:diamond_shard'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.diamond_shard').gray())
    }
  })

  // Temporary Heart Crystal
  event.addAdvanced(['healpgood:crystal_heart'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.crystal_heart').gray())
    }
  })

  // Permanent Heart Locket
  event.addAdvanced(['healpgood:heart_container'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.heart_container').gray())
    }
  })

  // Enchanted Book
  event.addAdvanced(['minecraft:enchanted_book'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.enchanted_book').gray())
    }
  })

  // Sword
  event.addAdvanced(['minecraft:wooden_sword', 'minecraft:stone_sword', 'minecraft:golden_sword', 'minecraft:iron_sword', 'minecraft:diamond_sword', 'minecraft:netherite_sword', 'blackiron:black_iron_sword'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.sword').gray())
    }
  })

  // Shovel
  event.addAdvanced(['minecraft:wooden_shovel', 'minecraft:stone_shovel', 'minecraft:golden_shovel', 'minecraft:iron_shovel', 'minecraft:diamond_shovel', 'minecraft:netherite_shovel'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.shovel').gray())
    }
  })

  // Hoe & Knives
  event.addAdvanced(['minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:golden_pickaxe', 'minecraft:iron_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_pickaxe'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.hoe_knives').gray())
    }
  })

  // Trident
  event.addAdvanced(['minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:golden_hoe', 'minecraft:iron_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_hoe'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.trident').gray())
    }
  })

  // Wooden Bows
  event.addAdvanced(['minecraft:bow'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.wooden_bows').gray())
    }
  })

  // Bows
  event.addAdvanced(['archeryexp:wooden_bow', 'archeryexp:iron_bow', 'archeryexp:gold_bow', 'archeryexp:diamond_bow', 'archeryexp:netherite_bow'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.bows').gray())
    }
  })

  // Harpoon 
  event.addAdvanced(['species:harpoon'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.harpoon').gray())
    }
  })

  // Emerald
  event.addAdvanced(['minecraft:emerald'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.emerald').gray())
    }
  })

  // Emerald
  event.addAdvanced(['kubejs:emerald_shard'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.emerald_shard').gray())
    }
  })

  // Warp Bank (Ender Chest)
  event.addAdvanced(['minecraft:ender_chest'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.void_chest').gray())
    }
  })
  // Tooltips for Odd Accessories (奇特饰品硬编码汉化)
  const oddaccessoriesItems = [
    'oddaccessories:broken_telephone',
    'oddaccessories:clean_tablet',
    'oddaccessories:collectible_meal_toy',
    'oddaccessories:emerald_nose',
    'oddaccessories:emergency_parachute',
    'oddaccessories:fiberglass_cloak',
    'oddaccessories:guts',
    'oddaccessories:homunculus',
    'oddaccessories:hourglass',
    'oddaccessories:malicious_tablet',
    'oddaccessories:mimic_ring',
    'oddaccessories:old_cross',
    'oddaccessories:old_sock',
    'oddaccessories:oversized_magnet',
    'oddaccessories:oxygen_rock',
    'oddaccessories:pelmen',
    'oddaccessories:piece_of_love',
    'oddaccessories:poop',
    'oddaccessories:pork_effigy',
    'oddaccessories:portable_tv',
    'oddaccessories:rotgut',
    'oddaccessories:secondhand_gas_mask',
    'oddaccessories:suspicious_bag',
    'oddaccessories:tattered_belt',
    'oddaccessories:tick',
    'oddaccessories:universal_attractor',
    'oddaccessories:villager_mask',
    // Directly registered items in OddaccessoriesModItems
    'oddaccessories:old_ring',
    'oddaccessories:loaded_dice',
    'oddaccessories:rusted_nail',
    'oddaccessories:malice',
    'oddaccessories:flaying_tool',
    'oddaccessories:harmony',
    'oddaccessories:heartfelt_confession',
    'oddaccessories:anomalous_mirror',
    'oddaccessories:regret_of_a_salaryman',
    'oddaccessories:wrinkled_dollar',
    'oddaccessories:enlightening_tablet',
    'oddaccessories:shattered_tablet',
    'oddaccessories:innocence',
    'oddaccessories:pungent_flower',
    'oddaccessories:armored_knight_doll',
    'oddaccessories:sifting_jar',
    'oddaccessories:cruel_fate',
    'oddaccessories:unconditional_love',
    'oddaccessories:discipline_rod',
    'oddaccessories:malicious_ring',
    'oddaccessories:enlightening_ring',
    'oddaccessories:crown_of_nails'
  ]
  event.addAdvanced(oddaccessoriesItems, (item, advanced, text) => {
    let itemId = item.id.replace('oddaccessories:', '')
    for (let i = 1; i < text.size(); i++) {
      let component = text.get(i)
      let str = component.getString()
      // Handle base descriptions
      if (str.includes("Disabled by config")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.disabled_by_config'))
        continue
      }
      if (str.includes("(disabled) Press shift to show tooltip")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.disabled_press_shift'))
        continue
      }
      if (str.includes("Press shift to show tooltip")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.press_shift'))
        continue
      }
      switch (itemId) {
        case 'broken_telephone':
          let btMatch = str.match(/Occasionally grants\s*(?:§b)?([\d.]+)/i)
          if (btMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.broken_telephone', btMatch[1]))
          break
        case 'clean_tablet':
          if (str.includes("Freedom")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.clean_tablet'))
          break
        case 'collectible_meal_toy':
          let cmtMatch = str.match(/within\s*(?:§e)?([\d.]+)/i)
          if (cmtMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.collectible_meal_toy', cmtMatch[1]))
          break
        case 'emerald_nose':
          let enMatch = str.match(/within\s*(?:§e)?([\d.]+)/i)
          if (enMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.emerald_nose', enMatch[1]))
          break
        case 'emergency_parachute':
          let epMatch = str.match(/more than\s*(?:§e)?([\d.]+)/i)
          if (epMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.emergency_parachute', epMatch[1]))
          break
        case 'fiberglass_cloak':
          let fcDmg = str.match(/multiplied by\s*(?:§c)?([\d.]+)/i)
          let fcMobs = str.match(/as long as\s*(?:§e)?([\d.]+)/i)
          if (fcDmg && fcMobs) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.fiberglass_cloak', fcDmg[1], fcMobs[1]))
          break
        case 'guts':
          let gutsMatch = str.match(/Guts\s*(?:§9)?(.*)/i)
          if (gutsMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.guts', gutsMatch[1]))
          break
        case 'homunculus':
          if (str.includes("Clears negative")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.homunculus'))
          break
        case 'hourglass':
          let hgMatch = str.match(/Every\s*(?:§e)?([\d.]+)\s*s.*was\s*(?:§e)?([\d.]+)\s*s/i)
          if (hgMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.hourglass', hgMatch[1], hgMatch[2]))
          break
        case 'malicious_tablet':
          let mtMatch = str.match(/Malicious Tablet\s*(?:§c)?(.*)/i)
          if (mtMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.malicious_tablet', mtMatch[1]))
          break
        case 'mimic_ring':
          let mrMatch = str.match(/effects\.\s*(?:§e)?([\d.]+)/i)
          if (mrMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.mimic_ring', mrMatch[1]))
          break
        case 'old_cross':
          let ocMatch = str.match(/within\s*(?:§e)?([\d.]+)/i)
          if (ocMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.old_cross', ocMatch[1]))
          break
        case 'old_sock':
          let osMatch = str.match(/within\s*(?:§e)?([\d.]+)/i)
          if (osMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.old_sock', osMatch[1]))
          break
        case 'oversized_magnet':
          let omRange = str.match(/within\s*(?:§e)?([\d.]+)/i)
          let omSlow = str.match(/is\s*(?:§c)?([\d.]+)/i)
          if (omRange && omSlow) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.oversized_magnet', omRange[1], omSlow[1]))
          break
        case 'oxygen_rock':
          if (str.includes("underwater")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.oxygen_rock'))
          break
        case 'pelmen':
          let pelmenMatch = str.match(/Regeneration\s*([IVXLCDM]*).*Strength\s*([IVXLCDM]*)/i)
          if (pelmenMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.pelmen', pelmenMatch[1], pelmenMatch[2]))
          break
        case 'piece_of_love':
          let polMatch = str.match(/Regeneration\s*(.*?)\s*for/i)
          if (polMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.piece_of_love', polMatch[1]))
          break
        case 'poop':
          if (str.includes("Nausea")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.poop'))
          break
        case 'pork_effigy':
          if (str.includes("pigs")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.pork_effigy'))
          break
        case 'portable_tv':
          if (str.includes("equipped")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.portable_tv'))
          break
        case 'rotgut':
          let rotgutMatch = str.match(/Strength\s*([IVXLCDM]*)/i)
          if (rotgutMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.rotgut', rotgutMatch[1]))
          break
        case 'secondhand_gas_mask':
          if (str.includes("immunity")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.secondhand_gas_mask'))
          break
        case 'suspicious_bag':
          if (str.includes("random")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.suspicious_bag'))
          break
        case 'tattered_belt':
          let tbMatch = str.match(/Grants\s*(?:§e)?([\d.]+).*by\s*(?:§c)?([\d.]+)/i)
          if (tbMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.tattered_belt', tbMatch[1], tbMatch[2]))
          break
        case 'tick':
          let tickMatch = str.match(/Jump Boost\s*([IVXLCDM]*)/i)
          if (tickMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.tick', tickMatch[1]))
          break
        case 'universal_attractor':
          let uaMatch = str.match(/within\s*(?:§e)?([\d.]+)/i)
          if (uaMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.universal_attractor', uaMatch[1]))
          break
        case 'villager_mask':
          if (str.includes("Villagers")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.villager_mask'))
          break
        // Registered items
        case 'old_ring':
          if (str.includes("nothing")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.old_ring'))
          break
        case 'loaded_dice':
          if (str.includes("critical")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.loaded_dice'))
          break
        case 'rusted_nail':
          let rnMatch = str.match(/drains\s*(?:§c)?([\d.]+)/i)
          if (rnMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.rusted_nail', rnMatch[1]))
          break
        case 'malice':
          let maliceMatch = str.match(/by\s*(?:§c)?([\d.]+)/i)
          if (maliceMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.malice', maliceMatch[1]))
          break
        case 'flaying_tool':
          let ftMatch = str.match(/by\s*(?:§c)?([\d.]+)/i)
          if (ftMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.flaying_tool', ftMatch[1]))
          break
        case 'harmony':
          let harmonyMatch = str.match(/by\s*(?:§9)?([\d.]+)/i)
          if (harmonyMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.harmony', harmonyMatch[1]))
          break
        case 'heartfelt_confession':
          let hcMatch = str.match(/by\s*(?:§e)?([\d.]+)/i)
          if (hcMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.heartfelt_confession', hcMatch[1]))
          break
        case 'anomalous_mirror':
          if (str.includes("inverted")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.anomalous_mirror'))
          break
        case 'regret_of_a_salaryman':
          let rosMatch = str.match(/granting\s*(?:§b)?([\d.]+)/i)
          if (rosMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.regret_of_a_salaryman', rosMatch[1]))
          break
        case 'wrinkled_dollar':
          if (str.includes("asleep")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.wrinkled_dollar'))
          break
        case 'enlightening_tablet':
          let etMatch = str.match(/gains\s*(?:§b)?([\d.]+)/i)
          if (etMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.enlightening_tablet', etMatch[1]))
          break
        case 'shattered_tablet':
          let stMatch = str.match(/receives\s*(?:§c)?([\d.]+)/i)
          if (stMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.shattered_tablet', stMatch[1]))
          break
        case 'innocence':
          if (str.includes("harming")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.innocence'))
          break
        case 'pungent_flower':
          if (str.includes("arrows")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.pungent_flower'))
          break
        case 'armored_knight_doll':
          let akdMatch = str.match(/1-in-(?:§9)?([\d.]+)/i)
          if (akdMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.armored_knight_doll', akdMatch[1]))
          break
        case 'sifting_jar':
          if (str.includes("Piece Of Love")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.sifting_jar'))
          break
        case 'cruel_fate':
          if (str.includes("regain")) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.cruel_fate'))
          break
        case 'unconditional_love':
          let ulMatch = str.match(/by\s*(?:§e)?([\d.]+)/i)
          if (ulMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.unconditional_love', ulMatch[1]))
          break
        case 'discipline_rod':
          let drMatch = str.match(/Speed\s*([IVXLCDM]*)/i)
          if (drMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.discipline_rod', drMatch[1]))
          break
        case 'malicious_ring':
          let mrRingMatch = str.match(/by\s*(?:§c)?([\d.]+)/i)
          if (mrRingMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.malicious_ring', mrRingMatch[1]))
          break
        case 'enlightening_ring':
          let erRingMatch = str.match(/by\s*(?:§9)?([\d.]+)/i)
          if (erRingMatch) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.enlightening_ring', erRingMatch[1]))
          break
        case 'crown_of_nails':
          let conSec = str.match(/Tetanus\s*\(§c([\d.]+)/i)
          let conMult = str.match(/receives\s*(?:§c)?([\d.]+)x/i)
          if (conSec && conMult) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.crown_of_nails', conSec[1], conMult[1]))
          break
      }
    }
  })

})