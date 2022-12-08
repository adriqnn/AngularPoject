const { getAllPizzaIngredient } = require('../services/pizzaIngredientService');

const pizzaIngredientController = require('express').Router();

pizzaIngredientController.get('/', async (req, res) => {
    try{
        const ingredients = await getAllPizzaIngredient();
        res.json(ingredients);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    }
})

module.exports = pizzaIngredientController;