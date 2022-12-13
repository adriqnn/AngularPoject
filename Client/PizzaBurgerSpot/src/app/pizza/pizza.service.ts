import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPizzaIngredient } from '../shared/interfaces';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  loadPizzaIngredients(){
    return this.httpClient.get<IPizzaIngredient[]>(`${apiURL}/pizzaIngredient`);
  };
};
