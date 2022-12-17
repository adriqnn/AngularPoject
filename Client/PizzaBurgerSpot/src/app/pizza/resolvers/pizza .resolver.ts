import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPizza } from "src/app/shared/interfaces";
import { PizzaService } from "../pizza.service";

@Injectable({
    providedIn: 'root'
})
export class PizzaResolver implements Resolve<IPizza | null>{
    constructor(private pizzaService: PizzaService, private router: Router){ 
    };
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IPizza | Observable<IPizza | null> | Promise<IPizza | null> | null {
        const pizzaId = route.params['id'];
        if(!pizzaId){
            this.router.navigate(['/not-found']);
            return null;
        };
        const result = this.pizzaService.loadPizza(pizzaId);
        result.subscribe({
            next: (value) => {
                return value;
            },
            error: (err) => {
                this.router.navigate(['/not-found']);
                return null;
            }
        });
        return result;
    };
};