const { getAllBurgers, getById } = require('../services/burgerService');
const { parseError } = require('../util/parser');

const burgerController = require('express').Router();

burgerController.get('/', async (req, res) => {
    try{
        const burgers = await getAllBurgers();
        res.json(burgers);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

burgerController.get('/:id', async (req, res) => {
    try{
        const item = await getById(req.params.id);
        if(!item){
            throw new Error('Item not in the database`');
        }
        res.json(item);
    }catch(err) {
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = burgerController;