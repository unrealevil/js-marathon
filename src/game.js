import scene from "./scene.js";
import {loadPokemons, loadRandomPokemon} from "./pokemons.js";
import log from "./battle-log.js";

let player;
let enemy;

function startGame(playerPokemon, ememyPokemon) {
    scene.clearAll();
    player = playerPokemon;
    enemy = ememyPokemon;
    scene.attachLeftPokemon(player);
    scene.attachRightPokemon(enemy);
    renderPokemons();

    player.actions.forEach((action) => {
        scene.attachAction(action, () => playerAction(action));
        action.render();
    });

    scene.addLogMessage(log.startGame(player, enemy));
}

function renderPokemons() {
    player.render();
    enemy.render();
}

function playerAction(action) {
    action.apply(player, enemy).finally(() => {
        action.render();
        scene.renderActionLog(action);
        renderPokemons();
        checkEndGameCondition();
    });
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
    // callback hell :)
    loadPokemons(pokemons => scene.showPokemonSelect(pokemons,
        playerPokemon => loadRandomPokemon(
            enemyPokemon => startGame(playerPokemon, enemyPokemon)
        )));
}

export default () => newGame();

