// --> pokemon/?name=pikachu&vida=100

const getAllPokemonsHandler = (req, res) => {
    const {name, vida} = req.query;
    if (name || vida) {

       return res.status(200).send(`Estos son los pokemons con nombre: ${name} y la vida ${vida}`);
    }
    res.status(200).send("Todos los usuarios");
};

const getPokemonIdHandler = (req, res) => {
    const {id} =req.params;
    res.status(200).send(`Usuario con id ${id}`);   
};

const createPokemonHandler = (req, res ) => {
    const {name, life, attack} = req.body;
    res.status(200).send(`El pokemon se ha creado con nombre:${name}, vida: ${life} y ataque:${attack}`);
    return  ;
};

module.exports = {
    getAllPokemonsHandler,
    getPokemonIdHandler,
    createPokemonHandler
}