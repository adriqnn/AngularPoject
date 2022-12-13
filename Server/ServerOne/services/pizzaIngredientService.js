const PizzaIngredient = require('../models/PizzaIngredient');

async function getAllPizzaIngredient(){
    return PizzaIngredient.find({}).sort({_id: 1});
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