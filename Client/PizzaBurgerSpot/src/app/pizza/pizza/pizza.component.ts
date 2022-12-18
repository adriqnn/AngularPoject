import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IPizza, IUser } from 'src/app/shared/interfaces';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  user: IUser | null = null;
  pizzas: IPizza[] | null = null;
  errorFetchingData = false;

  constructor(private authService: AuthService, private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.pizzaService.loadPizzas().subscribe({
      next: (value) => {
        this.pizzas = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  };
};