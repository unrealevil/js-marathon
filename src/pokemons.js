import {Pokemon} from "./pokemon.js";

export const pikachu = () => new Pokemon({
    name: 'Pikachu',
    image: './assets/pokemons/pikachu.png',
    hp: 150,
    level: 1,
});

export const charmander = () => new Pokemon({
    name: 'Charmander',
    image: './assets/pokemons/charmander.png',
    hp: 300,
    level: 2,
});