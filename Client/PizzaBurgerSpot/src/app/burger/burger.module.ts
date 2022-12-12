import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerComponent } from './burger/burger.component';
import { BurgerIngredientComponent } from './burger-ingredient/burger-ingredient.component';



@NgModule({
  declarations: [
    BurgerComponent,
    BurgerIngredientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BurgerModule { }
