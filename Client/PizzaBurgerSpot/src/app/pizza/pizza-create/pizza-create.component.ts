import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  errorMsg: boolean = false;
  msg: string = '';

  removeMsg(){
    setTimeout(() => {
      this.errorMsg = false;
      this.msg = '';
    }, 3000);
  };

  createPizzaHandler(form: NgForm): void{
    console.log(form);
    return;
  };
};