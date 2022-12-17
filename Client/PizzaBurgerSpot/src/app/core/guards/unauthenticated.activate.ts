import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class UnAuthenticatedActivate implements CanActivate{

    constructor(private authService: AuthService, private router: Router){
    };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const unAutenticated = route.data['unAutenticated'];
        if(unAutenticated && sessionStorage.length == 0){
            return this.router.navigate(['/auth/login']);
        };
        return true;
    };
};