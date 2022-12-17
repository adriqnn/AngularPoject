import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IBurger, IUser } from 'src/app/shared/interfaces';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  user: IUser | null = null ;
  burgers: IBurger[] | null = null;
  errorFetchingData = false;

  constructor(private authService: AuthService, private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.burgerService.loadBurgers().subscribe({
      next: (value) => {
        this.burgers = value;
        console.log(value);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  };
};