import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class AuthenticatedActivate implements CanActivate{
    
    constructor(private authService: AuthService, private router: Router){
    };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const alreadyLoggedIn = route.data['alreadyLoggedIn'];
        if(alreadyLoggedIn && sessionStorage.length > 0){
            this.authService.setProfile();
            return this.router.navigate(['/']);
        };
        return true;
    };
};