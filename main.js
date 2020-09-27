const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 90,
    elHP:  document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 50,
    elHP:  document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

function init() {
    console.log('Start Game');
    renderHP(character);
    renderHP(enemy);
}

$btn.addEventListener('click', function () {
    console.log('kick');
    changeHP(10, character);
    changeHP(10, enemy);
})

function changeHP(damage, person) {
    person.damageHP -= damage;
    renderHP(person);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressBarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressBarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}



init();
