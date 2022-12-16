import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AppInterceptor implements HttpInterceptor{

    constructor(private router: Router){

    }
    
    token: string | null = sessionStorage.getItem('token');

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith('[authenticate]')){
            req = req.clone({url: req.url.replace('[authenticate]', ''), headers: req.headers.append('X-Authorization', `${this.token}`)})
            console.log('intercepted!!!!!!!!!!!!!!!!!!');
        }
        return next.handle(req);
    }

};

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};