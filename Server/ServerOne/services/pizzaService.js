const Pizza = require('../models/Pizza');
const { Types } = require('mongoose');
const { getAdmin } = require('./userService');
const { getPizzaIngredientByName } = require('./pizzaIngredientService');

async function getAllPizzas(){
    return Pizza.find({}).sort({_id: 1}).populate('ingredients');
};

async function createPizzaForDB(pizza){
    const ingredients = pizza.ingredients;
    const ownerId = await getAdmin();
    const saved = await Promise.all(ingredients.map(e => getPizzaIngredientByName(e)));
    pizza.ingredients = saved;
    pizza.owner = ownerId;
    return await Pizza.create(pizza);
};

async function createPizza(pizza){
    return await Pizza.create(pizza);
};

async function countPizzas(){
    return await Pizza.count();
};

async function getById(id){
    if(Types.ObjectId.isValid(id)){
        return await Pizza.findById(id);
    }else{
        return undefined;
    };
};

module.exports = {
    getAllPizzas,
    createPizzaForDB,
    createPizza,
    countPizzas,
    getById
};