import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, repass: string){
    return this.http.post<{user: IUser, token: string}>(`${apiURL}/auth/register`, {username, email, password, repass});
  };

  login(username: string, password: string){
    return this.http.post<{user: IUser, token: string}>(`${apiURL}/auth/login`, {username, password});
  };

  logout(){
    return this.http.post<null>(`${apiURL}/auth/logout`, {});
  };

  getProfile(){
    const id = sessionStorage.getItem('id');
    return this.http.get<IUser>(`${apiURL}/profile/${id}`);
  };

  setProfile(){
    this.getProfile().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: () => {
        this.user = null;
      }
    })
  }
};