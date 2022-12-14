import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPizzaIngredient } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-pizza-ingredient-details',
  templateUrl: './pizza-ingredient-details.component.html',
  styleUrls: ['./pizza-ingredient-details.component.scss']
})
export class PizzaIngredientDetailsComponent implements OnInit {

  pizzaIngredient: IPizzaIngredient | null = null;
  errorFetcing = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pizzaIngredient = this.activatedRoute.snapshot.data?.['pizzaIngredient'];
  };
};
