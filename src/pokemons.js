import {Pokemon} from "./pokemon.js";
import {pokemonsData} from './pokemons-data';

export default () => {
    return pokemonsData.map((data) => new Pokemon(data));
}
