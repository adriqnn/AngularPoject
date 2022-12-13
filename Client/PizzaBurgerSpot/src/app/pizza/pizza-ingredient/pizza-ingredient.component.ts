import { Component, OnInit } from '@angular/core';
import { IPizzaIngredient } from '../../shared/interfaces/index';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-ingredient',
  templateUrl: './pizza-ingredient.component.html',
  styleUrls: ['./pizza-ingredient.component.scss']
})
export class PizzaIngredientComponent implements OnInit {

  pizzaIngredientList: IPizzaIngredient[] | null = null;
  errorFetchingData = false;
 
  constructor(private pizzaServie: PizzaService) { };

  ngOnInit(): void {
    this.pizzaServie.loadPizzaIngredients().subscribe({
      next: (value) => {
        this.pizzaIngredientList = value;
        console.log(value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  };
};
