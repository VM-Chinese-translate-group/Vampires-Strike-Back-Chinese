ItemEvents.rightClicked(event => {
  const { player, item } = event;

  if (item.id === 'kubejs:life_crystal') {
    player.potionEffects.add("minecraft:regeneration", 200, 0, true, false)
    player.potionEffects.add("minecraft:absorption", 600, 0, true, false)
    event.server.runCommandSilent(`execute as ${player.username} run semihardcore @p lives add 1`);
    event.server.runCommandSilent(`execute as ${player.username} run title @p title {\"translate\":\"message.kubejs.life_gained\"}`);
    item.count--

    let lookAngle = player.lookAngle
    let lookDistance = 1.5;

    let lookX = player.x + lookAngle.x() * lookDistance;
    let lookY = player.y + player.getEyeHeight() + lookAngle.y() * lookDistance;
    let lookZ = player.z + lookAngle.z() * lookDistance;

    player.level.spawnParticles('minecraft:glow 4 0.3 0.8', true, lookX, lookY, lookZ, 0.0, 0.5, 0.0, 44, 0.2)
    player.level.spawnParticles('irons_spellbooks:spark 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.3)
    player.level.spawnParticles('irons_spellbooks:spark 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.4)

    event.server.runCommandSilent(`execute at ${player.username} run playsound minecraft:block.large_amethyst_bud.place ambient ${player.username}`);
    event.server.runCommandSilent(`execute at ${player.username} run playsound advancementplaques:ui.toast.goal_complete weather ${player.username}`);
    event.server.runCommandSilent(`execute at ${player.username} run playsound minecraft:entity.player.levelup player ${player.username}`);

  }

  if (item.id === 'kubejs:absorption_heart_crystal') {
    player.potionEffects.add("minecraft:regeneration", 600, 0, true, false)
    player.potionEffects.add("minecraft:absorption", 1200, 1, true, false)
    item.count--

    let lookAngle = player.lookAngle
    let lookDistance = 1.5;

    let lookX = player.x + lookAngle.x() * lookDistance;
    let lookY = player.y + player.getEyeHeight() + lookAngle.y() * lookDistance;
    let lookZ = player.z + lookAngle.z() * lookDistance;

    player.level.spawnParticles('irons_spellbooks:spark 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.3)
    player.level.spawnParticles('irons_spellbooks:spark 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.4)

    event.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.large_amethyst_bud.place ambient @s`);
    event.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.player.levelup player @s`);

  }
});