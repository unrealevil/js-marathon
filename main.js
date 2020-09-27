const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP:  document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
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
    changeHP(random(20), character);
    changeHP(random(20), enemy);
})

function changeHP(damage, person) {
    person.damageHP -= damage;
    if(person.damageHP < 0){
        person.damageHP = 0;
    }
    renderHP(person);
    if(0 === person.damageHP){
        $btn.disabled = true;
        alert(person.name + ' lose');
    }
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

function random(max) {
    return Math.ceil(Math.random() * max);
}

init();
