import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLoggedIn(){
    return this.user !== null;
  };

  constructor(private http: HttpClient, private router: Router) { }

  register(username: string, email: string, password: string, repass: string){
    return this.http.post<{user: IUser, token: string}>(`${apiURL}/auth/register`, {username, email, password, repass});
  };

  login(username: string, password: string){
    return this.http.post<{user: IUser, token: string}>(`${apiURL}/auth/login`, {username, password});
  };

  logout(){
    return this.http.post<null>(`[authenticate]${apiURL}/auth/logout`, {});
  };

  getProfile(){
    const id = sessionStorage.getItem('id');
    return this.http.get<IUser>(`[authenticate]${apiURL}/profile/${id}`);
  };

  setProfile(){
    this.getProfile().subscribe({
      next: (user) => {
        console.log(user);
        this.user = user;
      },
      error: (err) => {
        sessionStorage.clear();
        this.user = null;
        this.router.navigate(['/auth/login'], {queryParams: {data: 'Please log in!'}});
      }
    })
  }
};