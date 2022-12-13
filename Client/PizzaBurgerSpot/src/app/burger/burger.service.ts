import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBurgerIngredient } from '../shared/interfaces';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private httpClient: HttpClient) { }

  loadBurgerIngredients(){
    return this.httpClient.get<IBurgerIngredient[]>(`${apiURL}/burgerIngredient`)
  };
};
