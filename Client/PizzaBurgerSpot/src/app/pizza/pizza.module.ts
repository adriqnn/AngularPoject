import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaIngredientComponent } from './pizza-ingredient/pizza-ingredient.component';



@NgModule({
  declarations: [
    PizzaComponent,
    PizzaIngredientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PizzaModule { }
