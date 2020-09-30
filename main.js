const $btnKick = document.getElementById('btn-kick');
const $btnSuperKick = document.getElementById('btn-super-kick');
const $btnStartGame = document.getElementById('btn-start-game');
const $logBoard = document.getElementById('battle-log');

const pakemonBehaviors = {
    render: function () {
        const {damageHP, defaultHP} = this;
        this.elHP.innerText = damageHP + ' / ' + defaultHP;
        const hpPercent = Math.round(damageHP / defaultHP * 100);
        this.elProgressbar.style.width = hpPercent + '%';
    },
    makeDamage: function (amount, fromPerson) {
        this.damageHP -= amount;
        if (this.damageHP < 0) {
            this.damageHP = 0;
        }
        battleLog.addMsg(generateBattlePhrase(this, fromPerson)
            + generateDamageInfo(amount, this)
        );
        this.render();
    },
    isDead: function () {
        return 0 === this.damageHP;
    },
    reset: function () {
        this.damageHP = this.defaultHP;
        this.render();
    }
}

const character = {
    name: 'Pikachu',
    defaultHP: 150,
    damageHP: 0,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    ...pakemonBehaviors,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 300,
    damageHP: 0,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    ...pakemonBehaviors,
}

const battleLog = {
    clear: () => $logBoard.innerHTML = '',
    addMsg: (msg) => {
        const $p = document.createElement('p');
        $p.innerHTML = msg;
        $logBoard.insertBefore($p, $logBoard.children[0]);
    }
}

function startGame() {
    $btnStartGame.style.display = 'none';
    $btnKick.style.display = 'block';
    $btnSuperKick.style.display = 'block';
    character.reset();
    enemy.reset();
    battleLog.clear();
    battleLog.addMsg(logDecor`Начинается бой между ${character.name} и ${enemy.name}`);
}

function checkEndGameCondition() {
    const {name: characterName} = character;
    const {name: enemyName} = enemy;

    if (character.isDead()) {
        battleLog.addMsg(logDecor`Эхх, ваш ${characterName} погиб смертью храбрых от грязных рук ${enemyName}`);
        battleLog.addMsg('<strong style="color:red">Вы проиграли :((</strong>');
        endGame();
        return;
    }
    if (enemy.isDead()) {
        battleLog.addMsg(logDecor`Ураа, ваш храбрый ${characterName} победил неудачного ${enemyName}`);
        battleLog.addMsg('<h3 style="color:goldenrod">Эпическая победа!!!</h3>');
        endGame();
    }
}

function endGame() {
    $btnKick.style.display = 'none';
    $btnSuperKick.style.display = 'none';
    $btnStartGame.style.display = 'block';
}

$btnKick.addEventListener('click', function () {
    character.makeDamage(random(20), enemy);
    enemy.makeDamage(random(20), character);
    checkEndGameCondition();
});

$btnSuperKick.addEventListener('click', function () {
    enemy.makeDamage(random(50), character);
    checkEndGameCondition();
});

$btnStartGame.addEventListener('click', function () {
    startGame();
});

function logDecor(templateData, ...keys) {
    let str = templateData[0];
    keys
        .map((val) => escape(val))
        .forEach((val, index) => str += `<strong>${val}</strong>` + templateData[index + 1]);
    return str;
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
    return phrases[random(phrases.length) - 1]();
}

function generateDamageInfo(amount, {name, damageHP: hpLeft, defaultHP: hpTotal}) {
    return `<br/>Урон <span style="color:red">-${amount}</span>`
        + `<br/>У ${name} осталось здоровья <span style="color:green">${hpLeft} из ${hpTotal}</span>`;
}

function random(max) {
    return Math.ceil(Math.random() * max);
}

endGame();
