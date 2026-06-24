ItemEvents.rightClicked(event => {

  let { item, player } = event

  if (item.id !== "sortilege:limitite") return

  let lookAngle = player.lookAngle

  let lookDistance = 1.5;

  let lookX = player.x + lookAngle.x() * lookDistance;
  let lookY = player.y + player.getEyeHeight() + lookAngle.y() * lookDistance;
  let lookZ = player.z + lookAngle.z() * lookDistance;

  player.level.spawnParticles('irons_spellbooks:spark 1 0.8 0.6', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.3)
  player.level.spawnParticles('irons_spellbooks:spark 1 0.5 0.4', true, lookX, lookY, lookZ, 0.0, 0.0, 0.0, 14, 0.4)

  player.runCommandSilent(`playsound minecraft:block.large_amethyst_bud.place ambient @p`)

  player.displayClientMessage(Text.translate('message.kubejs.expanded_inventory'), true);

});