const BurgerIngredient = require('../models/BurgerIngredient');

async function getAllBurgerIngredient(){
    return BurgerIngredient.find({});
}

async function createBurgerIngredient(burgerIngredient){
    return await BurgerIngredient.create(burgerIngredient);
};

async function countBurgerIngredients(){
    return await BurgerIngredient.count();
};

module.exports = {
    getAllBurgerIngredient,
    createBurgerIngredient,
    countBurgerIngredients
};