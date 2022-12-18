import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/burger/burger.service';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { IBurger, IPizza, IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser | null = null;
  errorFetchingData = false;
  date: string | null = null;

  userBurgers: IBurger[] | null = null;
  userPizzas: IPizza[] | null = null;

  constructor(private authService: AuthService, private burgerService: BurgerService, private pizzaService: PizzaService) {
  };

  ngOnInit(): void {
    const id: string | null = sessionStorage.getItem('id');
    if(id != null){
      this.burgerService.getUserBurgers(id).subscribe({
        next: (value) => {
          this.userBurgers = value;
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.log(err);
        }
      });
      this.pizzaService.getUserPizzas(id).subscribe({
        next: (value) => {
          this.userPizzas = value;
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.log(err);
        }
      });
    };
    this.authService.getProfile().subscribe({
      next: (value) => {
        this.user = value;
        const newDate = new Date(Number(value.createdAt));
        this.date = newDate.toLocaleString();
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    })
  };
};