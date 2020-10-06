import {random} from "./utils.js";

export default {
    startGame: (player, enemy) => logDecor`Начинается бой между ${player.name} и ${enemy.name}`,
    doDamage: (damagedPokemon, attackerPokemon) => generateBattlePhrase(damagedPokemon, attackerPokemon),
    damageInfo: (damageAmount) => `Урон <span style="color:red">-${damageAmount}</span>`,
    hpInfo: ({name, hp: hpLeft, defaultHp: hpTotal}) => `У ${name} осталось здоровья <span style="color:green">${hpLeft} из ${hpTotal}</span>`,
    doHealing: (pokemon) => generateHealingPhrase(pokemon),
    healingInfo: (hpAmount) => `Получено здоровья <span style="color:green">+${hpAmount}</span>`,
    playerLost: ({name: playerName,}, {name: enemyName}) => logDecor`Эхх, ваш ${playerName} погиб смертью храбрых от грязных рук ${enemyName}`,
    playerWin: ({name: playerName,}, {name: enemyName}) => logDecor`Ураа, ваш храбрый ${playerName} победил неудачного ${enemyName}`,
}

function generateBattlePhrase({name: first}, {name: second}) {
    const phrases = [
        () => logDecor`${first} вспомнил что-то важное, но неожиданно ${second}, не помня себя от испуга, ударил в предплечье врага.`,
        () => logDecor`${first} поперхнулся, и за это ${second} с испугу приложил прямой удар коленом в лоб врага.`,
        () => logDecor`${first} забылся, но в это время наглый ${second}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        () => logDecor`${first} пришел в себя, но неожиданно ${second} случайно нанес мощнейший удар.`,
        () => logDecor`${first} поперхнулся, но в это время ${second} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
        () => logDecor`${first} удивился, а ${second} пошатнувшись влепил подлый удар.`,
        () => logDecor`${first} высморкался, но неожиданно ${second} провел дробящий удар.`,
        () => logDecor`${first} пошатнулся, и внезапно наглый ${second} беспричинно ударил в ногу противника`,
        () => logDecor`${first} расстроился, как вдруг, неожиданно ${second} случайно влепил стопой в живот соперника.`,
        () => logDecor`${first} пытался что-то сказать, но вдруг, неожиданно ${second} со скуки, разбил бровь сопернику.`
    ];
    return phrases[random(0, phrases.length)]();
}

function generateHealingPhrase({name}) {
    const phrases = [
        () => logDecor`${name} порылся в кармане, и нашел семки.`,
        () => logDecor`${name} присел передохнуть на газончик.`,
        () => logDecor`${name} просто прилег на скамейку.`,
    ];
    return phrases[random(0, phrases.length)]();
}

function logDecor(templateData, ...keys) {
    let str = templateData[0];
    keys
        .map((val) => escape(val))
        .forEach((val, index) => str += `<strong>${val}</strong>` + templateData[index + 1]);
    return str;
}
