import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBurgerIngredient } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-burger-ingredient-details',
  templateUrl: './burger-ingredient-details.component.html',
  styleUrls: ['./burger-ingredient-details.component.scss']
})
export class BurgerIngredientDetailsComponent implements OnInit {

  burgerIngredient: IBurgerIngredient | null = null;
  errorFetchingData = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.burgerIngredient = this.activatedRoute.snapshot.data?.['burgerIngredient'];
  };
};
