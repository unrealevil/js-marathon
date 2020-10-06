import scene from "./scene.js";
import {pikachuActions} from "./actions.js";
import {charmander, pikachu} from "./pokemons.js";
import {random} from "./utils.js";
import log from "./battle-log.js";

let player;
let enemy;

function startGame() {
    scene.clearAll();
    player = pikachu();
    enemy = charmander();

    scene.attachLeftPokemon(player);
    player.render();
    scene.attachRightPokemon(enemy);
    enemy.render();

    pikachuActions().forEach((action) => {
        scene.attachAction(action, () => playerTurn(action));
        action.render();
    });

    scene.addLogMessage(log.startGame(player, enemy));
}

function renderPokemons() {
    player.render();
    enemy.render();
}

function playerTurn(action) {
    action.apply(player, enemy);
    action.render();
    renderPokemons();
    checkEndGameCondition();
    enemyTurn();
}

function enemyTurn() {
    const damage = random(20, 50);
    player.makeDamage(damage);
    scene.addLogMessage([
            log.doDamage(player, enemy),
            log.damageInfo(damage),
            log.hpInfo(player),
        ].join('<br/>')
    );
    renderPokemons();
    checkEndGameCondition();
}

function checkEndGameCondition() {
    if (player.isDead()) {
        scene.addLogMessage(log.playerLost(player, enemy));
        scene.showLostGame(newGame);
        return;
    }

    if (enemy.isDead()) {
        scene.addLogMessage(log.playerWin(player, enemy));
        scene.showWinGame(newGame);
    }
}

function newGame() {
    scene.clearAll();
    scene.showNewGame(startGame);
}

export default () => newGame();

