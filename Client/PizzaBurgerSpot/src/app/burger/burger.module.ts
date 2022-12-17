import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerComponent } from './burger/burger.component';
import { BurgerIngredientComponent } from './burger-ingredient/burger-ingredient.component';
import { RouterModule } from '@angular/router';
import { BurgerIngredientDetailsComponent } from './burger-ingredient-details/burger-ingredient-details.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';

@NgModule({
  declarations: [
    BurgerComponent,
    BurgerIngredientComponent,
    BurgerIngredientDetailsComponent,
    BurgerDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BurgerModule { };
