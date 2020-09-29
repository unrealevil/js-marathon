const $btnKick = document.getElementById('btn-kick');
const $btnSuperKick = document.getElementById('btn-super-kick');
const $btnStartGame = document.getElementById('btn-start-game');

const render = function () {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    const hpPercent = Math.round(this.damageHP / this.defaultHP * 100);
    this.elProgressbar.style.width = hpPercent + '%';
}

const makeDamage = function (amount) {
    this.damageHP -= amount;
    if (this.damageHP < 0) {
        this.damageHP = 0;
    }
    this.render();
}

const isDead = function () {
    return 0 === this.damageHP;
}

const reset = function () {
    this.damageHP = this.defaultHP;
    this.render();
}

const character = {
    name: 'Pikachu',
    defaultHP: 150,
    damageHP: 0,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    render: render,
    makeDamage: makeDamage,
    isDead: isDead,
    reset: reset,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 300,
    damageHP: 0,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    render: render,
    makeDamage: makeDamage,
    isDead: isDead,
    reset: reset,
}

function startGame() {
    $btnStartGame.style.display = 'none';
    $btnKick.style.display = 'block';
    $btnSuperKick.style.display = 'block';
    character.reset();
    enemy.reset();
}

function checkEndGameCondition() {
    if (character.isDead()) {
        endGame();
        alert('You Lost');
        return;
    }
    if (enemy.isDead()) {
        endGame();
        alert('You Win');
    }
}

function endGame() {
    $btnKick.style.display = 'none';
    $btnSuperKick.style.display = 'none';
    $btnStartGame.style.display = 'block';
}

$btnKick.addEventListener('click', function () {
    character.makeDamage(random(20));
    enemy.makeDamage(random(20));
    checkEndGameCondition();
});

$btnSuperKick.addEventListener('click', function () {
    enemy.makeDamage(random(50));
    checkEndGameCondition();
});

$btnStartGame.addEventListener('click', function () {
    startGame();
});

function random(max) {
    return Math.ceil(Math.random() * max);
}

endGame();
