const {Router} = require('express');
const {getTypeHandler} = require('../handlers/TypesHandlers');
const typeRouter = Router();

typeRouter.get('/', getTypeHandler);

module.exports = typeRouter;