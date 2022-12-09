const { getAllBurgerIngredient } = require('../services/burgerIngredientService');
const { parseError } = require('../util/parser');
const burgerIngredientController = require('express').Router();

burgerIngredientController.get('/', async (req, res) => {
    try{
        const ingredients = await getAllBurgerIngredient();
        res.json(ingredients);
    }catch(err){
        const message = parseError(err);
        res.status(400).json({message});
    };

});

module.exports = burgerIngredientController;