const BurgerIngredient = require('../models/BurgerIngredient');

async function getAllBurgerIngredient(){
    return BurgerIngredient.find({}).sort({_id: 1});
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