const Burger = require('../models/Burger');
const { Types } = require('mongoose');
const { getAdmin } = require('./userService');
const { getBurgerIngredientByName } = require('./burgerIngredientService');

async function getAllBurgers(){
    return Burger.find({}).sort({_id: 1}).populate('ingredients');
};

async function createBurgerForDB(burger){
    const ingredients = burger.ingredients;
    const ownerId = await getAdmin();
    const saved = await Promise.all(ingredients.map(e => getBurgerIngredientByName(e)));
    burger.ingredients = saved;
    burger.owner = ownerId;
    return await Burger.create(burger);
};

async function createBurger(burger){
    return await Burger.create(burger);
};

async function countBurgers(){
    return await Burger.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await Burger.findById(id).populate('ingredients');
    }else{
        return undefined;
    };
};

module.exports = {
    getAllBurgers,
    createBurgerForDB,
    createBurger,
    countBurgers,
    getById
};