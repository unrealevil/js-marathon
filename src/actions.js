import {DamageAction, HealthAction} from "./action.js";

export const pikachuActions = () => [
    new DamageAction({
        name: 'Дать леща',
        amount: 10,
        damageMax: 30,
        damageMin: 0,
    }),
    new DamageAction({
        name: 'Прописать пендаль',
        amount: 3,
        damageMax: 50,
        damageMin: 10
    }),
    new DamageAction({
        name: 'Ушатать с вертушки',
        amount: 2,
        damageMax: 100,
        damageMin: 50,
    }),
    new DamageAction({
        name: 'Тыкнуть  пальцем',
        amount: null, //бесконечно
        damageMax: 10,
        damageMin: 0,
    }),
    new HealthAction({
        name: 'Приложить подорожник',
        amount: 5,
        hpMax: 50,
        hpMin: 25,
    }),
    new HealthAction({
        name: 'Помазать зеленкой',
        amount: 1,
        hpMax: 150,
        hpMin: 50,
    }),
];

export const charmanderActions = () => [
    new DamageAction({
        name: 'Подставить подножку',
        amount: 10,
        damageMax: 30,
        damageMin: 0,
    }),
    new DamageAction({
        name: 'Дать щелбан',
        amount: null, //бесконечно
        damageMax: 10,
        damageMin: 0,
    }),
    new DamageAction({
        name: 'Пульнуть из рогатки',
        amount: 3,
        damageMax: 100,
        damageMin: 0,
    }),
    new HealthAction({
        name: 'Утереть сопли',
        amount: 4,
        hpMax: 100,
        hpMin: 0,
    }),
];
