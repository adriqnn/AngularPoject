import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerComponent } from './burger/burger.component';
import { BurgerIngredientComponent } from './burger-ingredient/burger-ingredient.component';
import { RouterModule } from '@angular/router';
import { BurgerIngredientDetailsComponent } from './burger-ingredient-details/burger-ingredient-details.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { BurgerDeleteComponent } from './burger-delete/burger-delete.component';
import { BurgerCreateComponent } from './burger-create/burger-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BurgerComponent,
    BurgerIngredientComponent,
    BurgerIngredientDetailsComponent,
    BurgerDetailsComponent,
    BurgerDeleteComponent,
    BurgerCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BurgerModule { };
