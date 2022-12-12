import { IBurgerIngredient } from "./BurgerIngredient";

export interface IBurger{
    _id: string;
    name: string;
    weight: number;
    picture: string;
    description: string;
    ingredients: IBurgerIngredient[];
    owner: string;
    created_at: string;
    updatedAt: string;
    __v: number;
};