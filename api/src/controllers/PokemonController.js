
const {Pokemon} = require("../db");

const createPokemonDb = async (name, life, attack, defense, weight) => {
    const newPokemon = await Pokemon.create({name, life, attack, defense, weight});
    return newPokemon;
}
const getPokemonDb = async (name) => {
    if(name){

        const PokemonByName = await Pokemon.findOne({where: {name}});
        return PokemonByName
    }
const allPokemons = await Pokemon.findAll();
return allPokemons
}
module.exports = {
    createPokemonDb,
    getPokemonDb,

}