import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-burger-create',
  templateUrl: './burger-create.component.html',
  styleUrls: ['./burger-create.component.scss']
})
export class BurgerCreateComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private burgerService: BurgerService) { }

  ngOnInit(): void {
  }

  errorMsg: boolean = false;
  msg: string = '';

  removeMsg(){
    setTimeout(() => {
      this.errorMsg = false;
      this.msg = '';
    }, 3000);
  };

  createBurgerHandler(form: NgForm): void{
    if(form.invalid){
      return;
    };
    const {name, weight, description, bun, ...rest } = form.value;

    const main = {name, weight, description, bun};
    const secondary = {
      bacon: rest.bacon == true ? 'Bacon' : '',
      beef: rest.beef == true ? 'Beef' : '',
      blackpepper: rest.blackpepper == true ? 'Black Pepper' : '',
      burgersauce: rest.burgersauce == true ? 'Burger Sauce' : '',
      caramelizedonions: rest.caramelizedonions == true ? 'Caramelized Onions' : '',
      cheddar: rest.cheddar == true ? 'Cheddar' : '',
      chicken: rest.chicken == true ? 'Chicken' : '',
      egg: rest.egg == true ? 'Egg' : '',
      emental: rest.emental == true ? 'Emental' : '',
      fish: rest.fish == true ? 'Fish' : '',
      flakysalt: rest.flakysalt == true ? 'Flaky Salt' : '',
      friedonions: rest.friedonions == true ? 'Fried Onions' : '',
      garlicpowder: rest.garlicpowder == true ? 'Garlic Powder' : '',
      gouda: rest.gouda == true ? 'Gouda' : '',
      greenpepper: rest.greenpepper == true ? 'Green Peppers' : '',
      ketchup: rest.ketchup == true ? 'Ketchup' : '',
      lettuce: rest.lettuce == true ? 'Lettuce' : '',
      mayonnaise: rest.mayonnaise == true ? 'Mayonnaise' : '',
      mushrooms: rest.mushrooms == true ? 'Mushrooms' : '',
      mustard: rest.mustard == true ? 'Mustard' : '',
      onions: rest.onions == true ? 'Onions' : '',
      pepperoni: rest.pepperoni == true ? 'Pepperoni' : '',
      pickles: rest.pickles == true ? 'Pickles' : '',
      tomatoes: rest.bacon == true ? 'Tomatoes' : '',
    };
    const owner = sessionStorage.getItem('id');
    const burger = {main: main, secondary:secondary, owner: owner};
    this.burgerService.createBurger(burger).subscribe({
      next: () => {
        this.router.navigate(['/burgers']);
      },
      error:() => {
        this.router.navigate(['/burgers/create']);
      }
    });
  };
};