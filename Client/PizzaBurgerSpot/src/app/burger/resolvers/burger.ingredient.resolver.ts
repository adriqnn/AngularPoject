import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IBurgerIngredient } from "src/app/shared/interfaces";
import { BurgerService } from "../burger.service";

@Injectable({
    providedIn: 'root'
})
export class BurgerIngredientResolver implements Resolve<IBurgerIngredient | null>{
    constructor(private burgerService: BurgerService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IBurgerIngredient | Observable<IBurgerIngredient | null> | Promise<IBurgerIngredient | null> | null {
        const burgerIngredientId = route.params['id'];
        if(!burgerIngredientId){
            //TODO add component
            this.router.navigate(['/not-found']);
            return null;
        };
        const result = this.burgerService.loadBurgerIngredient(burgerIngredientId);
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