import { IPizzaIngredient } from "./PizzaIngredient";

export interface IPizza{
    _id: string;
    name: string;
    weight: number;
    picture: string;
    description: string;
    ingredients: IPizzaIngredient[];
    owner: string;
    created_at: string;
    updatedAt: string;
    __v: number;
};