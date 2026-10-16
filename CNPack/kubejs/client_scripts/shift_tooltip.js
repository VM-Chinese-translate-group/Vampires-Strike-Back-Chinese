function getClientLanguage() {
  try {
    let mc = Java.loadClass('net.minecraft.client.Minecraft').getInstance();
    if (mc) {
      let lm = mc.getLanguageManager();
      if (lm) {
        if (typeof lm.getSelected === 'function') {
          return String(lm.getSelected());
        }
        if (typeof lm.getLanguage === 'function') {
          let lang = lm.getLanguage();
          if (lang && typeof lang.getCode === 'function') {
            return String(lang.getCode());
          }
        }
      }
      if (mc.options) {
        if (mc.options.language) {
          if (typeof mc.options.language.get === 'function') {
            return String(mc.options.language.get());
          }
          return String(mc.options.language);
        }
      }
    }
  } catch (e) {
    console.error("Error getting language: " + e);
  }
  return 'en_us';
}

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

  // Mantlediver
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

  // Iron Upgrade Tablet
  event.addAdvanced(['kubejs:iron_upgrade_tablet'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.iron_upgrade_tablet').gray())
    }
  })

  // Diamond Upgrade Tablet
  event.addAdvanced(['kubejs:diamond_upgrade_tablet'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.diamond_upgrade_tablet').gray())
    }
  })

  // Netherite Upgrade Tablet
  event.addAdvanced(['kubejs:netherite_upgrade_tablet'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.netherite_upgrade_tablet').gray())
    }
  })

  // Flint Hammer
  event.addAdvanced(['jaams_weaponry:flint_hammer', 'jaams_weaponry:broom'], (item, advanced, text) => {
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

  // Heart Piece
  event.addAdvanced(['healpgood:heart_piece'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.heart_piece').gray())
    }
  })

  // Temporary Heart Upgrade
  event.addAdvanced(['healpgood:crystal_heart'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, Text.translate('tooltip.kubejs.hold_shift').gray())
    } else {
      text.add(1, Text.translate('tooltip.kubejs.crystal_heart').gray())
    }
  })

  // Permanent Heart Upgrade
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

  // Totem of Nightmares
  event.addAdvanced(['sortilege:totem_of_nightmares'],
    (item, advanced, text) => {
      {
        text.add(1, Text.translate('tooltip.kubejs.nightmare_mode').gray())
      }
    })

  // Irons Armours
  event.addAdvanced(
    [
      'minecraft:turtle_helmet',
      'sortilege:witch_hat',
      'artifacts:villager_hat',
      'oddaccessories:wrinkled_dollar',
      'oddaccessories:emerald_nose'
    ],
    (item, advanced, text) => {
      {
        text.add(1, Text.translate('tooltip.kubejs.scrappable').gray())
      }
    })

  // Unrepairables
  event.addAdvanced(
    [
      'minecraft:turtle_helmet',

      'sortilege:witch_hat',

      'minecells:cursed_sword',

      'irons_spellbooks:keeper_flamberge',
      'irons_spellbooks:legionnaire_flamberge',
      'irons_spellbooks:legionnaire_flamberge',
      'irons_spellbooks:decrepit_scythe',
      'irons_spellbooks:hellrazor',

      'irons_spellbooks:tarnished_helmet',

      'irons_spellbooks:wandering_magician_helmet',
      'irons_spellbooks:wandering_magician_chestplate',
      'irons_spellbooks:wandering_magician_leggings',
      'irons_spellbooks:wandering_magician_boots',
      'irons_spellbooks:pyromancer_helmet',
      'irons_spellbooks:pyromancer_chestplate',
      'irons_spellbooks:pyromancer_leggings',
      'irons_spellbooks:pyromancer_boots',
      'irons_spellbooks:electromancer_helmet',
      'irons_spellbooks:electromancer_chestplate',
      'irons_spellbooks:electromancer_leggings',
      'irons_spellbooks:electromancer_boots',
      'irons_spellbooks:cultist_helmet',
      'irons_spellbooks:cultist_chestplate',
      'irons_spellbooks:cultist_leggings',
      'irons_spellbooks:cultist_boots',
      'irons_spellbooks:archevoker_helmet',
      'irons_spellbooks:archevoker_chestplate',
      'irons_spellbooks:archevoker_leggings',
      'irons_spellbooks:archevoker_boots',
      'irons_spellbooks:cryomancer_helmet',
      'irons_spellbooks:cryomancer_chestplate',
      'irons_spellbooks:cryomancer_leggings',
      'irons_spellbooks:cryomancer_boots',
      'irons_spellbooks:shadowwalker_helmet',
      'irons_spellbooks:shadowwalker_chestplate',
      'irons_spellbooks:shadowwalker_leggings',
      'irons_spellbooks:shadowwalker_boots',
      'irons_spellbooks:priest_helmet',
      'irons_spellbooks:priest_chestplate',
      'irons_spellbooks:priest_leggings',
      'irons_spellbooks:priest_boots',
      'irons_spellbooks:plagued_helmet',
      'irons_spellbooks:plagued_chestplate',
      'irons_spellbooks:plagued_leggings',
      'irons_spellbooks:plagued_boots',
      'irons_spellbooks:pumpkin_helmet',
      'irons_spellbooks:pumpkin_chestplate',
      'irons_spellbooks:pumpkin_leggings',
      'irons_spellbooks:pumpkin_boots',
      'irons_spellbooks:tarnished_crown',
      'irons_spellbooks:netherite_mage_helmet',
      'irons_spellbooks:netherite_mage_chestplate',
      'irons_spellbooks:netherite_mage_leggings',
      'irons_spellbooks:netherite_mage_boots',
      'irons_spellbooks:wizard_helmet',
      'irons_spellbooks:wizard_chestplate',
      'irons_spellbooks:wizard_leggings',
      'irons_spellbooks:wizard_boots'
    ],
    (item, advanced, text) => {
      {
        text.add(1, Text.translate('tooltip.kubejs.unrepairable').red())
      }

    })
  // Tooltips for Odd Accessories (奇特饰品硬编码汉化)
  // BEGIN VSB 1.8.1 Odd Accessories templates
  const oddaccessoriesTooltipRules = [
    [new RegExp("^When\\s+hurt,\\s+applies\\s+Tetanus\\s+\\((.*?)s\\)\\s+to\\s+both\\s+the\\s+attacker\\s+and\\s+holder\\.\\s+The\\s+holder\\s+receives\\s+(.*?)x\\s+damage\\s+from\\s+Tetanus$"), "tooltip.kubejs.oddaccessories.crown_of_nails"],
    [new RegExp("^Reduces\\s+incoming\\s+damage\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.enlightening_ring"],
    [new RegExp("^Increases\\s+the\\s+damage\\s+output\\s+of\\s+the\\s+holder\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.malicious_ring"],
    [new RegExp("^Repeatedly\\s+hitting\\s+an\\s+enemy\\s+builds\\s+up\\s+knockback,\\s+reaching\\s+Knockback\\s+(.*?)\\s+after\\s+(.*?)\\s+hits$"), "tooltip.kubejs.oddaccessories.kinetic_hand"],
    [new RegExp("^When\\s+hurt\\s+by\\s+an\\s+enemy\\s+you\\s+are\\s+not\\s+facing,\\s+gain\\s+Resistance\\s+(.*?)\\s+and\\s+Speed\\s+(.*?)\\s+for\\s+(.*?)s$"), "tooltip.kubejs.oddaccessories.flight"],
    [new RegExp("^Deals\\s+damage\\s+to\\s+the\\s+holder's\\s+mount\\s+when\\s+they\\s+right\\-click\\s+with\\s+an\\s+empty\\s+hand,\\s+but\\s+applies\\s+Speed\\s+(.*?)\\s+to\\s+the\\s+mount\\s+for\\s+some\\s+time$"), "tooltip.kubejs.oddaccessories.discipline_rod"],
    [new RegExp("^Saves\\s+the\\s+holder\\s+from\\s+certain\\s+death\\s+a\\s+limited\\s+number\\s+of\\s+times\\.\\s+Increases\\s+the\\s+healing\\s+factor\\s+of\\s+the\\s+holder\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.unconditional_love"],
    [new RegExp("^Grants\\s+the\\s+holder\\s+a\\s+Piece\\s+Of\\s+Love\\s+upon\\s+waking$"), "tooltip.kubejs.oddaccessories.sifting_jar"],
    [new RegExp("^Has\\s+a\\s+1\\-in\\-(.*?)\\s+chance\\s+to\\s+negate\\s+incoming\\s+damage\\s+towards\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.armored_knight_doll"],
    [new RegExp("^The\\s+holder's\\s+arrows\\s+apply\\s+a\\s+random\\s+negative\\s+effect$"), "tooltip.kubejs.oddaccessories.pungent_flower"],
    [new RegExp("^When\\s+hurt,\\s+the\\s+holder\\s+receives\\s+(.*?)%\\s+more\\s+damage$"), "tooltip.kubejs.oddaccessories.shattered_tablet"],
    [new RegExp("^The\\s+holder\\s+gains\\s+(.*?)%\\s+of\\s+the\\s+remaining\\s+XP\\s+needed\\s+for\\s+the\\s+next\\s+level\\s+when\\s+collecting\\s+experience\\s+orbs$"), "tooltip.kubejs.oddaccessories.enlightening_tablet"],
    [new RegExp("^Prevents\\s+the\\s+holder\\s+from\\s+falling\\s+asleep$"), "tooltip.kubejs.oddaccessories.wrinkled_dollar"],
    [new RegExp("^Beds\\s+will\\s+explode\\s+when\\s+the\\s+holder\\s+attempts\\s+to\\s+sleep\\s+in\\s+them,\\s+granting\\s+(.*?)\\s+experience$"), "tooltip.kubejs.oddaccessories.regret_of_a_salaryman"],
    [new RegExp("^Negate\\s+any\\s+incoming\\s+damage\\s+that\\s+deals\\s+less\\s+than\\s+(.*?)\u2764\\s+\\(or\\s+(.*?)%\\s+of\\s+max\\s+health\\)$"), "tooltip.kubejs.oddaccessories.scar_tissue"],
    [new RegExp("^Incoming\\s+damage\\s+to\\s+the\\s+holder\\s+is\\s+inverted,\\s+except\\s+when\\s+damage\\s+would\\s+exceed\\s+the\\s+holder's\\s+maximum\\s+health$"), "tooltip.kubejs.oddaccessories.anomalous_mirror"],
    [new RegExp("^Increases\\s+the\\s+healing\\s+factor\\s+of\\s+the\\s+holder\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.heartfelt_confession"],
    [new RegExp("^Reduces\\s+incoming\\s+damage\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.enlightening_ring"],
    [new RegExp("^Increases\\s+the\\s+damage\\s+output\\s+of\\s+the\\s+holder\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.malicious_ring"],
    [new RegExp("^When\\s+attacking\\s+non\\-aggressive\\s+or\\s+unaware\\s+mobs,\\s+increase\\s+the\\s+damage\\s+output\\s+of\\s+the\\s+holder\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.malice"],
    [new RegExp("^Grants\\s+the\\s+holder\\s+and\\s+any\\s+attacker\\s+high\\s+knockback\\s+when\\s+the\\s+holder\\s+is\\s+hit$"), "tooltip.kubejs.oddaccessories.pelmen_3"],
    [new RegExp("^Best\\s+worn\\s+as\\s+a\\s+set$"), "tooltip.kubejs.oddaccessories.best_as_set"],
    [new RegExp("^The\\s+holder\\s+receives\\s+Tetanus\\s+when\\s+hurt\\s+\\(drains\\s+(.*?)%\\s+of\\s+current\\s+HP\\)$"), "tooltip.kubejs.oddaccessories.rusted_nail"],
    [new RegExp("^On\\s+critical\\s+hit,\\s+roll\\s+a\\s+die\\.\\s+Higher\\s+rolls\\s+grant\\s+stronger\\s+buffs\\s+or\\s+debuffs\\s+to\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.loaded_dice"],
    [new RegExp("^Does\\s+absolutely\\s+nothing!$"), "tooltip.kubejs.oddaccessories.old_ring"],
    [new RegExp("^Gain\\s+\\+(.*?)%\\s+speed\\s+per\\s+kill\\s+in\\s+a\\s+life\\s+\\(up\\s+to\\s+(.*?)%\\)\\.\\s+Each\\s+hit\\s+taken\\s+removes\\s+(.*?)%\\s+speed$"), "tooltip.kubejs.oddaccessories.baby"],
    [new RegExp("^Occasionally\\s+grants\\s+(.*?)\\s+experience\\s+to\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.broken_telephone"],
    [new RegExp("^Stores\\s+1/(.*?)\\s+of\\s+consumed\\s+food\\s+for\\s+later\\.\\s+Right\\-click\\s+to\\s+restore\\s+hunger$"), "tooltip.kubejs.oddaccessories.clay_vessel"],
    [new RegExp("^Clay\\s+Vessel\\s+\\((.*?)\\)$"), "tooltip.kubejs.oddaccessories.clay_vessel_name"],
    [new RegExp("^Grants\\s+the\\s+Freedom\\s+effect\\s+to\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.clean_tablet"],
    [new RegExp("^Attracts\\s+baby\\s+zombies\\s+within\\s+(.*?)\\s+blocks\\s+to\\s+the\\s+holder\\s+and\\s+makes\\s+them\\s+friendly$"), "tooltip.kubejs.oddaccessories.collectible_meal_toy"],
    [new RegExp("^The\\s+holder\\s+is\\s+unable\\s+to\\s+regain\\s+health,\\s+but\\s+is\\s+granted\\s+Resistance\\s+(.*?)$"), "tooltip.kubejs.oddaccessories.cruel_fate"],
    [new RegExp("^Disabled\\s+by\\s+config$"), "tooltip.kubejs.oddaccessories.disabled_by_config"],
    [new RegExp("^Destroyed\\s+on\\s+unequip/death!$"), "tooltip.kubejs.oddaccessories.destroyed_on_unequip"],
    [new RegExp("^\\(disabled\\)\\s+Press\\s+shift\\s+to\\s+show\\s+tooltip$"), "tooltip.kubejs.oddaccessories.disabled_press_shift"],
    [new RegExp("^Press\\s+shift\\s+to\\s+show\\s+tooltip$"), "tooltip.kubejs.oddaccessories.press_shift"],
    [new RegExp("^Attracts\\s+villagers\\s+within\\s+(.*?)\\s+blocks\\s+to\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.emerald_nose"],
    [new RegExp("^Deploys\\s+a\\s+parachute\\s+when\\s+the\\s+holder\\s+falls\\s+more\\s+than\\s+(.*?)\\s+blocks$"), "tooltip.kubejs.oddaccessories.emergency_parachute"],
    [new RegExp("^All\\s+incoming\\s+damage\\s+is\\s+multiplied\\s+by\\s+(.*?)x\\.\\s+While\\s+sneaking,\\s+the\\s+holder\\s+cannot\\s+attack,\\s+but\\s+is\\s+invisible\\s+to\\s+mobs\\s+as\\s+long\\s+as\\s+(.*?)\\s+or\\s+fewer\\s+are\\s+nearby$"), "tooltip.kubejs.oddaccessories.fiberglass_cloak"],
    [new RegExp("^Reduces\\s+the\\s+holder's\\s+incoming\\s+damage\\s+by\\s+(.*?)%\\s+per\\s+death\\s+they\\s+accumulate\\s+\\(up\\s+to\\s+(.*?)%\\)$"), "tooltip.kubejs.oddaccessories.guts_desc"],
    [new RegExp("^Clears\\s+negative\\s+effects\\s+in\\s+exchange\\s+for\\s+experience$"), "tooltip.kubejs.oddaccessories.homunculus_2"],
    [new RegExp("^Clears\\s+negative\\s+effects\\s+in\\s+exchange\\s+for\\s+\u2764$"), "tooltip.kubejs.oddaccessories.homunculus"],
    [new RegExp("^Every\\s+(.*?)s,\\s+the\\s+holder's\\s+health\\s+is\\s+rolled\\s+back\\s+to\\s+what\\s+it\\s+was\\s+(.*?)s\\s+earlier$"), "tooltip.kubejs.oddaccessories.hourglass"],
    [new RegExp("^When\\s+eaten,\\s+applies\\s+Soothed\\s+for\\s+(.*?)\\s+min,\\s+clearing\\s+and\\s+blocking\\s+Nausea\\s+and\\s+Hunger$"), "tooltip.kubejs.oddaccessories.hunger_tablets"],
    [new RegExp("^Prevents\\s+the\\s+holder\\s+from\\s+harming\\s+others,\\s+but\\s+grants\\s+them\\s+Regeneration\\s+(.*?)$"), "tooltip.kubejs.oddaccessories.innocence"],
    [new RegExp("^Increases\\s+the\\s+holder's\\s+damage\\s+output\\s+by\\s+(.*?)%\\s+per\\s+kill\\s+they\\s+accumulate\\s+\\(up\\s+to\\s+(.*?)%\\)$"), "tooltip.kubejs.oddaccessories.malicious_tablet_desc"],
    [new RegExp("^Malicious\\s+Tablet\\s+(.*?)$"), "tooltip.kubejs.oddaccessories.malicious_tablet"],
    [new RegExp("^Shift\\s+\\+\\s+Right\\-Click\\s+with\\s+an\\s+empty\\s+hand\\s+to\\s+summon\\s+a\\s+Player\\s+Mimic\\s+that\\s+copies\\s+the\\s+holder's\\s+items,\\s+attributes,\\s+effects,\\s+and\\s+damage\\s+output\\.\\s+(.*?)%\\s+of\\s+incoming\\s+damage\\s+is\\s+redirected\\s+to\\s+the\\s+mimic$"), "tooltip.kubejs.oddaccessories.mimic_ring"],
    [new RegExp("^Sets\\s+undead\\s+mobs\\s+within\\s+(.*?)\\s+blocks\\s+on\\s+fire$"), "tooltip.kubejs.oddaccessories.old_cross"],
    [new RegExp("^All\\s+entities\\s+within\\s+(.*?)\\s+blocks,\\s+including\\s+the\\s+holder,\\s+receive\\s+Slowness\\s+and\\s+Nausea$"), "tooltip.kubejs.oddaccessories.old_sock"],
    [new RegExp("^Pulls\\s+the\\s+holder\\s+toward\\s+nearby\\s+ores\\s+within\\s+(.*?)\\s+blocks,\\s+but\\s+the\\s+holder\\s+is\\s+(.*?)%\\s+slower$"), "tooltip.kubejs.oddaccessories.oversized_magnet"],
    [new RegExp("^The\\s+holder\\s+sinks\\s+while\\s+underwater,\\s+but\\s+gains\\s+oxygen\\s+and\\s+mining\\s+speed$"), "tooltip.kubejs.oddaccessories.oxygen_rock"],
    [new RegExp("^Grants\\s+the\\s+holder\\s+Speed\\s+(.*?),\\s+but\\s+also\\s+grants\\s+entities\\s+that\\s+harm\\s+the\\s+holder\\s+Speed\\s+(.*?)$"), "tooltip.kubejs.oddaccessories.pelmen_2"],
    [new RegExp("^Grants\\s+the\\s+holder\\s+Regeneration\\s+(.*?),\\s+but\\s+also\\s+grants\\s+entities\\s+that\\s+harm\\s+the\\s+holder\\s+Strength\\s+(.*?)$"), "tooltip.kubejs.oddaccessories.pelmen"],
    [new RegExp("^When\\s+eaten,\\s+grants\\s+Regeneration\\s+(.*?)\\s+for\\s+10\\s+seconds$"), "tooltip.kubejs.oddaccessories.piece_of_love"],
    [new RegExp("^Applies\\s+Nausea\\s+to\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.poop"],
    [new RegExp("^All\\s+types\\s+of\\s+pigs\\s+become\\s+aggressive\\s+towards\\s+the\\s+holder,\\s+but\\s+drop\\s+extra\\s+loot$"), "tooltip.kubejs.oddaccessories.pork_effigy"],
    [new RegExp("^While\\s+equipped,\\s+the\\s+TV\\s+notifies\\s+the\\s+holder\\s+when\\s+shows\\s+air\\.\\s+During\\s+airtime,\\s+right\\-click\\s+with\\s+the\\s+item\\s+in\\s+hand\\s+to\\s+start\\s+playback\\.\\s+While\\s+watching,\\s+the\\s+holder\\s+gains\\s+the\\s+Happy\\s+effect$"), "tooltip.kubejs.oddaccessories.portable_tv"],
    [new RegExp("^Inflicts\\s+permanent\\s+Hunger\\s+(.*?),\\s+but\\s+grants\\s+Speed\\s+(.*?)\\s+and\\s+Strength\\s+(.*?)\\s+in\\s+exchange$"), "tooltip.kubejs.oddaccessories.redheaded_doll"],
    [new RegExp("^Grants\\s+Strength\\s+(.*?)\\s+at\\s+all\\s+times,\\s+but\\s+randomly\\s+swaps\\s+the\\s+holder's\\s+held\\s+item\\s+during\\s+combat$"), "tooltip.kubejs.oddaccessories.rotgut"],
    [new RegExp("^Grants\\s+immunity\\s+to\\s+Slowness\\s+and\\s+Nausea$"), "tooltip.kubejs.oddaccessories.secondhand_gas_mask"],
    [new RegExp("^Drops\\s+a\\s+random\\s+accessory$"), "tooltip.kubejs.oddaccessories.suspicious_bag"],
    [new RegExp("^Grants\\s+(.*?)\\s+extra\\s+charm\\s+slots,\\s+but\\s+reduces\\s+the\\s+holder's\\s+max\\s+health\\s+by\\s+(.*?)%$"), "tooltip.kubejs.oddaccessories.tattered_belt"],
    [new RegExp("^Makes\\s+the\\s+holder\\s+allergic\\s+to\\s+beef\\s+and\\s+pork,\\s+but\\s+grants\\s+Jump\\s+Boost\\s+(.*?)$"), "tooltip.kubejs.oddaccessories.tick"],
    [new RegExp("^Attracts\\s+most\\s+mobs\\s+within\\s+(.*?)\\s+blocks\\s+to\\s+the\\s+holder$"), "tooltip.kubejs.oddaccessories.universal_attractor"],
    [new RegExp("^Villagers\\s+run\\s+from\\s+the\\s+holder,\\s+but\\s+drop\\s+extra\\s+loot$"), "tooltip.kubejs.oddaccessories.villager_mask"]
  ]
  // END VSB 1.8.1 Odd Accessories templates
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
    'oddaccessories:crown_of_nails',
    // 1.1.5-beta additions
    'oddaccessories:hunger_tablets',
    'oddaccessories:redheaded_doll',
    'oddaccessories:kinetic_hand',
    'oddaccessories:flight',
    'oddaccessories:baby',
    'oddaccessories:clay_vessel'
  // BEGIN VSB 1.8.1 new accessories
    , 'oddaccessories:heart_prop'
    , 'oddaccessories:heart_prop_2'
    , 'oddaccessories:heart_prop_3'
    , 'oddaccessories:homunculus_2'
    , 'oddaccessories:pelmen_2'
    , 'oddaccessories:pelmen_3'
    , 'oddaccessories:scar_tissue'
  // END VSB 1.8.1 new accessories
  ]
  event.addAdvanced(oddaccessoriesItems, (item, advanced, text) => {
    if (getClientLanguage() === 'en_us') return;
    let itemId = item.id.replace('oddaccessories:', '')
    for (let i = 0; i < text.size(); i++) {
      let component = text.get(i)
      let str = component.getString()
      // BEGIN VSB 1.8.1 dynamic tooltip resolution
      let plain = String(str).replace(/§./g, '').trim()
      let translated = null
      for (let ruleIndex = 0; ruleIndex < oddaccessoriesTooltipRules.length; ruleIndex++) {
        let rule = oddaccessoriesTooltipRules[ruleIndex]
        let match = rule[0].exec(plain)
        if (!match) continue
        if (match.length === 1) translated = Text.translate(rule[1])
        else if (match.length === 2) translated = Text.translate(rule[1], match[1])
        else if (match.length === 3) translated = Text.translate(rule[1], match[1], match[2])
        else translated = Text.translate(rule[1], match[1], match[2], match[3])
        break
      }
      if (translated !== null) {
        text.set(i, translated)
        continue
      }
      // END VSB 1.8.1 dynamic tooltip resolution
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
          if (gutsMatch) {
            text.set(i, Text.translate('tooltip.kubejs.oddaccessories.guts', gutsMatch[1]))
          } else {
            let gutsDesc = str.match(/damage by\s*(?:§\w)?\s*([\d.]+)%\s*[\s\S]*?up to\s*(?:§\w)?\s*([\d.]+)%/i)
            if (gutsDesc) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.guts_desc', gutsDesc[1], gutsDesc[2]))
            }
          }
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
          if (str.includes("harming")) {
            let match = str.match(/Regeneration\s*([IVXLCDM]*)/i)
            if (match) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.innocence', match[1]))
            }
          }
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
          if (str.includes("regain")) {
            let match = str.match(/Resistance\s*([IVXLCDM]*)/i)
            if (match) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.cruel_fate', match[1]))
            }
          }
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
          let conSec = str.match(/Tetanus.*?\([\s\S]*?([\d.]+)\s*s/i)
          let conMult = str.match(/receives[\s\S]*?([\d.]+)x/i)
          if (conSec && conMult) text.set(i, Text.translate('tooltip.kubejs.oddaccessories.crown_of_nails', conSec[1], conMult[1]))
          break
        // 1.1.5-beta additions
        case 'hunger_tablets':
          if (str.includes("Soothed")) {
            let match = str.match(/for\s*(?:§e)?([\d.]+)\s*min/i)
            if (match) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.hunger_tablets', match[1]))
            }
          }
          break
        case 'redheaded_doll':
          if (str.includes("permanent")) {
            let match = str.match(/Hunger\s*([IVXLCDM]*).*Speed\s*([IVXLCDM]*).*Strength\s*([IVXLCDM]*)/i)
            if (match) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.redheaded_doll', match[1], match[2], match[3]))
            }
          }
          break
        case 'kinetic_hand':
          if (str.includes("knockback")) {
            let match = str.match(/reaching\s*(?:§f)?Knockback\s*(.*?)-strength after\s*(?:§f)?([\d.]+)/i)
            if (match) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.kinetic_hand', match[1], match[2]))
            }
          }
          break
        case 'flight':
          if (str.includes("facing")) {
            let match = str.match(/Resistance\s*([IVXLCDM]*).*Speed\s*([IVXLCDM]*).*for\s*(?:§e)?([\d.]+)/i)
            if (match) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.flight', match[1], match[2], match[3]))
            }
          }
          break
        case 'clay_vessel':
          let cvName = str.match(/Clay Vessel\s*\(([\d.]+)\)/i)
          if (cvName) {
            text.set(i, Text.translate('tooltip.kubejs.oddaccessories.clay_vessel_name', cvName[1]))
          } else {
            let cvTooltip = str.match(/1\/([\d.]+)/i)
            if (cvTooltip) {
              text.set(i, Text.translate('tooltip.kubejs.oddaccessories.clay_vessel', cvTooltip[1]))
            }
          }
          break
      }
    }
  })

})