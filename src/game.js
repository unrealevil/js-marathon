import scene from "./scene.js";
import pokemons from "./pokemons.js";
import {random} from "./utils.js";
import log from "./battle-log.js";

let player;
let enemy;

function startGame(playerPokemon) {
    scene.clearAll();
    player = playerPokemon;
    const enemyPokemons = pokemons().filter(pokemon => pokemon.name !== player.name);
    enemy = enemyPokemons[random(0, enemyPokemons.length)];

    scene.attachLeftPokemon(player);
    scene.attachRightPokemon(enemy);
    renderPokemons();

    player.actions.forEach((action) => {
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
    scene.renderActionLog(action);
    renderPokemons();
    if (checkEndGameCondition()) {
        enemyTurn();
    }
}

function enemyTurn() {
    const availableActions = enemy.actions.filter(action => !action.isDisable());
    if(availableActions) {
        const action = availableActions[[random(0, availableActions.length)]];
        action.apply(enemy, player);
        scene.renderActionLog(action);
        renderPokemons();
    }
    checkEndGameCondition();
}

function checkEndGameCondition() {
    if (player.isDead()) {
        scene.addLogMessage(log.playerLost(player, enemy));
        scene.showLostGame(newGame);
        return false;
    }

    if (enemy.isDead()) {
        scene.addLogMessage(log.playerWin(player, enemy));
        scene.showWinGame(newGame);
        return false;
    }
    return true;
}

function newGame() {
    scene.clearAll();
    scene.showNewGame(selectPokemon);
}

function selectPokemon() {
    scene.clearAll();
    scene.showPokemonSelect(pokemons(), startGame);
}

export default () => newGame();

