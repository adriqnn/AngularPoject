import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.scss']
})
export class PizzaDeleteComponent implements OnInit {

  constructor(private router: Router, private pizzaService: PizzaService, private route: ActivatedRoute) {
  };

  ngOnInit(): void {
    const params: string = this.route.snapshot.params['id'];
    const paramsDetails = params.split('[!&%$!]');
    const itemId = paramsDetails[0];
    const ownerId = paramsDetails[1];
    const userId = paramsDetails[2];
    if(ownerId == userId){
      this.pizzaService.deletePizza(itemId).subscribe({
        next: () => {
          this.router.navigate(['/pizzas']);
        },
        error: (err) => {
          this.router.navigate(['/']); 
        } 
      });
    }else{
      this.router.navigate(['/']); 
    };
  };
};
