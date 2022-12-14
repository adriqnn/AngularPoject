import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPizzaIngredient } from "src/app/shared/interfaces";
import { PizzaService } from "../pizza.service";

@Injectable({
    providedIn: 'root'
})
export class PizzaIngredientResolver implements Resolve<IPizzaIngredient | null>{
    constructor(private pizzaService: PizzaService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPizzaIngredient | Observable<IPizzaIngredient | null> | Promise<IPizzaIngredient | null> | null {
        const pizzaIngredientId = route.params['id'];
        if(!pizzaIngredientId){
            //TODO add component
            this.router.navigate(['/not-found']);
            return null;
        }
        const result = this.pizzaService.loadPizzaIngredient(pizzaIngredientId);
        result.subscribe({
            next: (value) => {
                return value;
            },
            error: (err) => {
                this.router.navigate(['/not-found']);
                return null;
            }
        });
        return this.pizzaService.loadPizzaIngredient(pizzaIngredientId);
    };
};