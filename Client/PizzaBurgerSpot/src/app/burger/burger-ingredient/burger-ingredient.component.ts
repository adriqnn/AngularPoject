import { Component, OnInit } from '@angular/core';
import { IBurgerIngredient } from 'src/app/shared/interfaces';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-burger-ingredient',
  templateUrl: './burger-ingredient.component.html',
  styleUrls: ['./burger-ingredient.component.scss']
})
export class BurgerIngredientComponent implements OnInit {

  burgerIngredientList: IBurgerIngredient[] | null = null;
  errorFetchingData = false;

  constructor(private burgerService: BurgerService) { };

  ngOnInit(): void {
    this.burgerService.loadBurgerIngredients().subscribe({
      next: (value) => {
        this.burgerIngredientList = value;
        console.log(value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  };
};
