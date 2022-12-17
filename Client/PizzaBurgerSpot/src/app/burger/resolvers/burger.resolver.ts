import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IBurger } from "src/app/shared/interfaces";
import { BurgerService } from "../burger.service";

@Injectable({
    providedIn: 'root'
})
export class BurgerResolver implements Resolve<IBurger | null>{
    constructor(private burgerService: BurgerService, private router: Router){ 
    };
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IBurger | Observable<IBurger | null> | Promise<IBurger | null> | null {
        const burgerId = route.params['id'];
        if(!burgerId){
            this.router.navigate(['/not-found']);
            return null;
        };
        const result = this.burgerService.loadBurger(burgerId);
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