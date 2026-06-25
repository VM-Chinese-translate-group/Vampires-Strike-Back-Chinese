title @s actionbar [{"translate":"vampires.actionbar.humans_slain","color":"red"},{"score":{"name":"@s","objective":"reputation"},"color":"gold"}]

execute as @a[scores={reputation=10..}] run advancement grant @s only vampires:10_notoriety
execute as @a[scores={reputation=10..}] run incontrol setphase 10_notoriety
execute as @a[scores={reputation=10}] run playsound minecraft:item.goat_horn.sound.6 ambient @p ~ ~ ~ 1 1

execute as @a[scores={reputation=20..}] run advancement grant @s only vampires:20_assassin
execute as @a[scores={reputation=20..}] run incontrol setphase 20_assassin
execute as @a[scores={reputation=20}] run playsound minecraft:item.goat_horn.sound.6 ambient @p ~ ~ ~ 1 1

execute as @a[scores={reputation=30..}] run advancement grant @s only vampires:30_rampager
execute as @a[scores={reputation=30..}] run incontrol setphase 30_rampager
execute as @a[scores={reputation=30}] run playsound minecraft:item.goat_horn.sound.6 ambient @p ~ ~ ~ 1 1

execute as @a[scores={reputation=40..}] run advancement grant @s only vampires:40_monster
execute as @a[scores={reputation=40..}] run incontrol setphase 40_monster
execute as @a[scores={reputation=40}] run playsound minecraft:item.goat_horn.sound.6 ambient @p ~ ~ ~ 1 1

execute as @a[scores={reputation=50..}] run advancement grant @s only vampires:50_destroyer
execute as @a[scores={reputation=50..}] run incontrol setphase 50_destroyer
execute as @a[scores={reputation=50}] run playsound minecraft:item.goat_horn.sound.6 ambient @p ~ ~ ~ 1 1
