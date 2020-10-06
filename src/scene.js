import {buttonDefault, buttonSelectPokemon, messageBig} from './widgets.js';

const $logBoard = document.getElementById('battle-log');
const $actionsHolder = document.getElementById('battle-actions');
const $leftCharacter = document.getElementById('left-character');
const $rightCharacter = document.getElementById('right-character');

const clearActions = () => {
    $actionsHolder.innerHTML = '';
}

const clearBattleLog = () => {
    $logBoard.innerHTML = '';
}

const clearPokemons = () => {
    $leftCharacter.innerHTML = '';
    $rightCharacter.innerHTML = '';
}

const initCharacterRender = ($characterHolder, pokemon) => {
    $characterHolder.innerHTML = characterHtml(pokemon);
    const $elHP = $characterHolder.querySelector('.hp-text'),
        $elProgressbar = $characterHolder.querySelector('.hp-progressbar');

    pokemon.render = () => {
        const {hp, defaultHp} = pokemon;
        $elHP.innerText = hp + ' / ' + defaultHp;
        const hpPercent = Math.round(hp / defaultHp * 100);
        $elProgressbar.style.width = hpPercent + '%';
    };
}

const addLogMessage = (msg) => {
    if (!msg) {
        return;
    }
    const $p = document.createElement('p');
    $p.innerHTML = msg;
    $logBoard.insertBefore($p, $logBoard.children[0]);
}

export default {
    clearAll: () => {
        clearActions();
        clearBattleLog();
        clearPokemons();
    },
    showNewGame: (newGameCallback) => {
        const $btn = buttonDefault('Начать эпическую битву', newGameCallback);
        $actionsHolder.appendChild($btn);
    },
    attachAction: (action, actionCallback) => {
        const $btn = action.btn(action.name, actionCallback);
        $actionsHolder.appendChild($btn);
        action.render = () => {
            const {name, amount} = action;
            $btn.innerText = `${name + (null !== amount ? ` (${amount})` : '')}`;
            if (action.isDisable()) {
                $btn.disabled = true;
                $btn.removeEventListener('click', actionCallback);
            }

            addLogMessage(action.popLogs().join('<br/>'));
        }
    },
    attachLeftPokemon: (pokemon) => initCharacterRender($leftCharacter, pokemon),
    attachRightPokemon: (pokemon) => initCharacterRender($rightCharacter, pokemon),
    addLogMessage,
    showLostGame: (newGameCallback) => {
        clearActions();
        $actionsHolder.appendChild(messageBig('<strong style="color:red">Вы проиграли :((</strong>'));
        $actionsHolder.appendChild(buttonDefault('ОК', newGameCallback));
    },
    showWinGame: (newGameCallback) => {
        clearActions();
        $actionsHolder.appendChild(messageBig('<strong style="color:#fdf200">Эпическая победа!!!</strong>'));
        $actionsHolder.appendChild(buttonDefault('ОК', newGameCallback));
    },
    showPokemonSelect: (pokemons, startGameCallback) => {
        $actionsHolder.appendChild(messageBig('<strong style="color:#ffc650;">Выбери своего покемона</strong>'));
        pokemons.forEach((pokemon) => {
            const $btn = buttonSelectPokemon(pokemon, () => startGameCallback(pokemon));
            $actionsHolder.appendChild($btn);
        });
    }
};

const characterHtml = ({name, level, hp, defaultHp, image}) => `
            <span class="lvl">Lv. ${level}</span>
            <img src="${image}" class="sprite" alt="${name}">
            <div class="details">
                <h2 class="name">${name}</h2>
                <div class="hp">
                    <div class="bar">
                        <div class="health hp-progressbar"></div>
                    </div>
                    <span class="text hp-text">${hp} / ${defaultHp}</span>
                </div>
            </div>
`;
