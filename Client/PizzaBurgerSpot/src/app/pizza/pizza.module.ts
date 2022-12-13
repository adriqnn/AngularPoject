import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaIngredientComponent } from './pizza-ingredient/pizza-ingredient.component';
import { RouterModule } from '@angular/router';
import { PizzaIngredientDetailsComponent } from './pizza-ingredient-details/pizza-ingredient-details.component';

@NgModule({
  declarations: [
    PizzaComponent,
    PizzaIngredientComponent,
    PizzaIngredientDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PizzaModule { };
