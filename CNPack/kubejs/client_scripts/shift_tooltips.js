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

})