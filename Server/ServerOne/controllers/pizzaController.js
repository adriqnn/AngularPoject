const { getAllPizzas, getById, deleteById } = require('../services/pizzaService');
const { parseError } = require('../util/parser');
const session = require('../middlewares/session');

const pizzaController = require('express').Router();

pizzaController.get('/', async (req, res) => {
    try{
        const pizzas = await getAllPizzas();
        res.json(pizzas);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

pizzaController.get('/:id', async (req, res) => {
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

pizzaController.delete('/delete/:id', session(), async (req, res) => {
    const item = await getById(req.params.id);
    try{
        await deleteById(req.params.id);
        res.status(204).end();
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };
});

module.exports = pizzaController;