const PizzaIngredient = require('../models/PizzaIngredient');

async function getAllPizzaIngredient(){
    return PizzaIngredient.find({});
}

async function createPizzaIngredient(pizzaIngredient){
    return await PizzaIngredient.create(pizzaIngredient);
};

async function countPizzaIngredients(){
    return await PizzaIngredient.count();
};

module.exports = {
    getAllPizzaIngredient,
    createPizzaIngredient,
    countPizzaIngredients
};