import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IPizza, IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent implements OnInit {

  user: String | null = null;
  pizza: IPizza | null = null;
  errorFetchingData = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('id');
    this.pizza = this.activatedRoute.snapshot.data?.['pizza'];
  };
};