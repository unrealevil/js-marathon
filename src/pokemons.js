import {Pokemon} from "./pokemon.js";
import API from './api.js'

const defaultPakemonDrugs =  [
    {
        name: 'Green potion',
        maxHp: 50,
        minHp: 25,
        maxCount: 5,
    },
    {
        name: 'Medical kid',
        maxHp: 150,
        minHp: 50,
        maxCount: 5,
    },
];

export const loadPokemons = onLoad => {
    API.fetchAll().then(pokemonsData => onLoad(pokemonsData.map((data) => new Pokemon({ ...data, drugs: defaultPakemonDrugs}))));
}

export const loadRandomPokemon = onLoad => {
    API.findRandom().then(data => onLoad(new Pokemon(data)));
}

