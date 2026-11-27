ItemEvents.rightClicked(event => {
  const { player, item } = event;

  let summonCommand = null;
  let message = null;

  if (item.id === 'kubejs:haunt_summon') {
    summonCommand = 'summon goety:haunt ~ ~1 ~';
    message = Text.translate('message.kubejs.summoned_haunt');

  } else if (item.id === 'kubejs:skull_summon') {
    summonCommand = 'summon goety:haunted_skull';
    message = Text.translate('message.kubejs.summoned_skull');

  } else if (item.id === 'kubejs:wraith_summon') {
    summonCommand = 'summon goety:wraith_servant';
    message = Text.translate('message.kubejs.summoned_wraith');

  } else if (item.id === 'kubejs:ice_golem_summon') {
    summonCommand = 'summon goety:ice_golem';
    message = Text.translate('message.kubejs.summoned_ice_golem');

  } else if (item.id === 'kubejs:fire_hoglin_summon') {
    summonCommand = 'summon goety:burning_hoglin';
    message = Text.translate('message.kubejs.summoned_fire_hoglin');
  }
  // Only run the summon/effects if a valid summon item was used
  if (summonCommand) {
    // Summon
    player.server.runCommandSilent(
      `execute at ${player.username} run ${summonCommand}`
    );

    // Message
    player.displayClientMessage(message, true);

    // Remove one item
    item.count--;

    let lookAngle = player.lookAngle
    let lookDistance = 1.5;

    let lookX = player.x + lookAngle.x() * lookDistance;
    let lookY = player.y + player.getEyeHeight() + lookAngle.y() * lookDistance;
    let lookZ = player.z + lookAngle.z() * lookDistance;

    player.level.spawnParticles('irons_spellbooks:spark 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.3)
    player.level.spawnParticles('minecraft:poof 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 10, 0.4)

    event.server.runCommandSilent(`execute at ${player.username} run playsound minecraft:block.large_amethyst_bud.place ambient ${player.username}`);
    event.server.runCommandSilent(`execute at ${player.username} run playsound entity.evoker.cast_spell ambient ${player.username}`);

  }
});