const getTypeHandler = (req, res) => {
    res.satus(200).send("Se obtuvieron los tipos de pokemons");

};
module.exports = {getTypeHandler};