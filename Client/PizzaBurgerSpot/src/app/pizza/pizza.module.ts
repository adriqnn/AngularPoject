import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaIngredientComponent } from './pizza-ingredient/pizza-ingredient.component';
import { RouterModule } from '@angular/router';
import { PizzaIngredientDetailsComponent } from './pizza-ingredient-details/pizza-ingredient-details.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';

@NgModule({
  declarations: [
    PizzaComponent,
    PizzaIngredientComponent,
    PizzaIngredientDetailsComponent,
    PizzaDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PizzaModule { };
