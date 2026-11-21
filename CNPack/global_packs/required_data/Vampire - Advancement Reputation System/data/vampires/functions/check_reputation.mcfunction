title @s actionbar [{"translate":"vampires.actionbar.humans_slain","color":"red"},{"score":{"name":"@s","objective":"reputation"},"color":"gold"}]

execute as @a[scores={reputation=10..}] run advancement grant @s only vampires:10_notoriety
execute as @a[scores={reputation=10..}] run incontrol setphase 10_notoriety

execute as @a[scores={reputation=20..}] run advancement grant @s only vampires:20_assassin
execute as @a[scores={reputation=20..}] run incontrol setphase 20_assassin

execute as @a[scores={reputation=30..}] run advancement grant @s only vampires:30_rampager
execute as @a[scores={reputation=30..}] run incontrol setphase 30_rampager

execute as @a[scores={reputation=40..}] run advancement grant @s only vampires:40_monster
execute as @a[scores={reputation=40..}] run incontrol setphase 40_monster

execute as @a[scores={reputation=50..}] run advancement grant @s only vampires:50_destroyer
execute as @a[scores={reputation=50..}] run incontrol setphase 50_destroyer

execute as @a[scores={reputation=60..}] run advancement grant @s only vampires:60_harbinger
execute as @a[scores={reputation=60..}] run incontrol setphase 60_harbinger

execute as @a[scores={reputation=70..}] run advancement grant @s only vampires:70_annihilator
execute as @a[scores={reputation=70..}] run incontrol setphase 70_annihilator

execute as @a[scores={reputation=80..}] run advancement grant @s only vampires:80_calamity
execute as @a[scores={reputation=80..}] run incontrol setphase 80_calamity

execute as @a[scores={reputation=90..}] run advancement grant @s only vampires:90_omen
execute as @a[scores={reputation=90..}] run incontrol setphase 90_omen

execute as @a[scores={reputation=100..}] run advancement grant @s only vampires:100_nightmare
execute as @a[scores={reputation=100..}] run incontrol setphase 100_nightmare
