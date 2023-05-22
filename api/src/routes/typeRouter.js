const {Router} = require('express');
const {getTypeHandler} = require('../handlers/typesHandlers');
const typeRouter = Router ();
typeRouter.get('/',getTypeHandler);

module.exports = typeRouter;