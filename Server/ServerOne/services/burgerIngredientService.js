const BurgerIngredient = require('../models/BurgerIngredient');
const { Types } = require('mongoose');

async function getAllBurgerIngredient(){
    return BurgerIngredient.find({}).sort({_id: 1});
};

async function createBurgerIngredient(burgerIngredient){
    return await BurgerIngredient.create(burgerIngredient);
};

async function countBurgerIngredients(){
    return await BurgerIngredient.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await BurgerIngredient.findById(id);
    }else{
        return undefined;
    };
};

module.exports = {
    getAllBurgerIngredient,
    createBurgerIngredient,
    countBurgerIngredients,
    getById
};