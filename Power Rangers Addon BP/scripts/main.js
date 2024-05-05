import { system, world } from "@minecraft/server";

world.afterEvents.itemUse.subscribe((eventItem) => {
    const player = eventItem.source;
    const item = eventItem.itemStack;
    if (item.typeId.includes('ranger') || item.typeId.includes('morphers')) {
        const itemGive = item.typeId.includes('ranger') ? item.typeId.replace('ranger', 'morphers') : item.typeId.replace('morphers', 'ranger');
        player.runCommand(`clear @s ${itemGive}`);
        player.runCommand(`clear @s ${item.typeId}`);
        player.runCommand(`replaceitem entity @s slot.armor.head 0 ${item.typeId}`);
        player.runCommand(`give @s ${itemGive}`);
    }
});