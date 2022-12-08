const BurgerIngredient = require('../models/BurgerIngredient');

async function createBurgerIngredient(burgerIngredient){
    return await BurgerIngredient.create(burgerIngredient);
};

async function countBurgerIngredients(){
    return await BurgerIngredient.count();
};

module.exports = {
    createBurgerIngredient,
    countBurgerIngredients
};