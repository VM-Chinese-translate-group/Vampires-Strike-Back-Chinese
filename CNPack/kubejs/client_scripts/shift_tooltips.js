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
  event.addAdvanced(['minecraft:wooden_sword', 'minecraft:stone_sword', 'minecraft:golden_sword',  'minecraft:iron_sword', 'minecraft:diamond_sword', 'minecraft:netherite_sword', 'blackiron:black_iron_sword'], (item, advanced, text) => {
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
    'oddaccessories:villager_mask'
  ]

  event.addAdvanced(oddaccessoriesItems, (item, advanced, text) => {
    for (let i = 1; i < text.size(); i++) {
      let component = text.get(i)
      let str = component.getString()

      // BrokenTelephoneItem
      if (str.includes("Occasionally grants") && str.includes("experience")) {
        let match = str.match(/Occasionally grants\s*(?:§b)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.broken_telephone', match[1]))
        }
      }
      // CleanTabletItem
      else if (str.includes("Grants the") && str.includes("Freedom") && str.includes("effect")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.clean_tablet'))
      }
      // CollectibleMealToyItem
      else if (str.includes("Attracts baby zombies")) {
        let match = str.match(/within\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.collectible_meal_toy', match[1]))
        }
      }
      // EmeraldNoseItem
      else if (str.includes("Attracts villagers")) {
        let match = str.match(/within\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.emerald_nose', match[1]))
        }
      }
      // EmergencyParachuteItem
      else if (str.includes("Deploys a") && str.includes("parachute")) {
        let match = str.match(/more than\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.emergency_parachute', match[1]))
        }
      }
      // FiberglassCloakItem
      else if (str.includes("incoming damage is multiplied")) {
        let matchDmg = str.match(/multiplied by\s*(?:§c)?([\d.]+)/i)
        let matchMobs = str.match(/as long as\s*(?:§e)?([\d.]+)/i)
        if (matchDmg && matchMobs) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.fiberglass_cloak', matchDmg[1], matchMobs[1]))
        }
      }
      // GutsItem
      else if (str.includes("Guts")) {
        let match = str.match(/Guts\s*(?:§9)?(.*)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.guts', match[1]))
        }
      }
      // HomunculusItem
      else if (str.includes("Clears negative effects")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.homunculus'))
      }
      // HourglassItem
      else if (str.includes("health is") && str.includes("rolled back")) {
        let match = str.match(/Every\s*(?:§e)?([\d.]+)\s*s.*was\s*(?:§e)?([\d.]+)\s*s/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.hourglass', match[1], match[2]))
        }
      }
      // MaliciousTabletItem
      else if (str.includes("Malicious Tablet")) {
        let match = str.match(/Malicious Tablet\s*(?:§c)?(.*)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.malicious_tablet', match[1]))
        }
      }
      // MimicRingItem
      else if (str.includes("summon a") && str.includes("Player Mimic")) {
        let match = str.match(/effects\.\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.mimic_ring', match[1]))
        }
      }
      // OldCrossItem
      else if (str.includes("undead mobs within")) {
        let match = str.match(/within\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.old_cross', match[1]))
        }
      }
      // OldSockItem
      else if (str.includes("entities within") && str.includes("Slowness") && str.includes("Nausea")) {
        let match = str.match(/within\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.old_sock', match[1]))
        }
      }
      // OversizedMagnetItem
      else if (str.includes("Pulls the holder toward")) {
        let rangeMatch = str.match(/within\s*(?:§e)?([\d.]+)/i)
        let slowMatch = str.match(/is\s*(?:§c)?([\d.]+)/i)
        if (rangeMatch && slowMatch) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.oversized_magnet', rangeMatch[1], slowMatch[1]))
        }
      }
      // OxygenRockItem
      else if (str.includes("sinks while underwater")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.oxygen_rock'))
      }
      // PelmenItem
      else if (str.includes("Grants the holder") && str.includes("Regeneration")) {
        let match = str.match(/Regeneration\s*([IVXLCDM]*).*Strength\s*([IVXLCDM]*)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.pelmen', match[1], match[2]))
        }
      }
      // PieceOfLoveItem
      else if (str.includes("When eaten, grants") && str.includes("Regeneration")) {
        let match = str.match(/Regeneration\s*(.*?)\s*for/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.piece_of_love', match[1]))
        }
      }
      // PoopItem
      else if (str.includes("Applies") && str.includes("Nausea") && str.includes("holder")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.poop'))
      }
      // PorkEffigyItem
      else if (str.includes("pigs become aggressive")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.pork_effigy'))
      }
      // PortableTVItem
      else if (str.includes("While equipped, the TV")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.portable_tv'))
      }
      // RotgutItem
      else if (str.includes("Strength") && str.includes("randomly swaps")) {
        let match = str.match(/Strength\s*([IVXLCDM]*)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.rotgut', match[1]))
        }
      }
      // SecondhandGasMaskItem
      else if (str.includes("immunity to") && str.includes("Slowness")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.secondhand_gas_mask'))
      }
      // SuspiciousBagItem
      else if (str.includes("Drops a random accessory")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.suspicious_bag'))
      }
      // TatteredBeltItem
      else if (str.includes("extra charm slots")) {
        let match = str.match(/Grants\s*(?:§e)?([\d.]+).*by\s*(?:§c)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.tattered_belt', match[1], match[2]))
        }
      }
      // TickItem
      else if (str.includes("allergic to beef and pork")) {
        let match = str.match(/Jump Boost\s*([IVXLCDM]*)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.tick', match[1]))
        }
      }
      // UniversalAttractorItem
      else if (str.includes("Attracts most mobs")) {
        let match = str.match(/within\s*(?:§e)?([\d.]+)/i)
        if (match) {
          text.set(i, Text.translate('tooltip.kubejs.oddaccessories.universal_attractor', match[1]))
        }
      }
      // VillagerMaskItem
      else if (str.includes("Villagers run from")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.villager_mask'))
      }

      // Base Config descriptions (公共配置提示)
      else if (str.includes("Disabled by config")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.disabled_by_config'))
      }
      else if (str.includes("(disabled) Press shift to show tooltip")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.disabled_press_shift'))
      }
      else if (str.includes("Press shift to show tooltip")) {
        text.set(i, Text.translate('tooltip.kubejs.oddaccessories.press_shift'))
      }
    }
  })

})