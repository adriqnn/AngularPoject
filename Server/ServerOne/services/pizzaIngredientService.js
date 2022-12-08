const PizzaIngredient = require('../models/PizzaIngredient');

async function createPizzaIngredient(pizzaIngredient){
    return await PizzaIngredient.create(pizzaIngredient);
};

async function countPizzaIngredients(){
    return await PizzaIngredient.count();
};

module.exports = {
    createPizzaIngredient,
    countPizzaIngredients
};