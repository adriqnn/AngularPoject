import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private pizzaService: PizzaService) { }

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

  createPizzaHandler(form: NgForm): void{
    if(form.invalid){
      return;
    };
    const {name, weight, description, dough, ...rest } = form.value;
    const main = {name, weight, description, dough};
    const secondary = {
      basil: rest.basil == true ? 'Basil' : '',
      chicken: rest.chicken == true ? 'Chicken' : '',
      corn: rest.corn == true ? 'Corn' : '',
      emental: rest.emental == true ? 'Emental' : '',
      flakysalt: rest.flakysalt == true ? 'Flaky Salt' : '',
      garlicpowder: rest.garlicpowder == true ? 'Garlic Powder' : '',
      greenpeppers: rest.greenpeppers == true ? 'Green Peppers' : '',
      ketchup: rest.ketchup == true ? 'Ketchup' : '',
      mozzarella: rest.mozzarella == true ? 'Mozzarella' : '',
      mushrooms: rest.mushrooms == true ? 'Mushrooms' : '',
      olives: rest.olives == true ? 'Olives' : '',
      onions: rest.onions == true ? 'Onions' : '',
      oregano: rest.oregano == true ? 'Oregano' : '',
      pepperoni: rest.pepperoni == true ? 'Pepperoni' : '',
      pickles: rest.pickles == true ? 'Pickles' : '',
      smokedbacon: rest.smokedbacon == true ? 'Smoked Bacon' : '',
      smokedcheese: rest.smokedcheese == true ? 'Smoked Cheese' : '',
      smokedham: rest.smokedham == true ? 'Smoked Ham' : '',
      sourcream: rest.sourcream == true ? 'Sour Cream' : '',
      tomatoes: rest.tomatoes == true ? 'Tomatoes' : '',
      tomatosauce: rest.tomatosauce == true ? 'Tomato Sauce' : '',
    };
    const owner = sessionStorage.getItem('id');
    const pizza = {main: main, secondary:secondary, owner: owner};
    this.pizzaService.createPizza(pizza).subscribe({
      next: () => {
        this.router.navigate(['/pizzas']);
      },
      error:(err) => {
        this.msg = err.error.message;
        this.errorMsg = true;
      }
    });
  };
};