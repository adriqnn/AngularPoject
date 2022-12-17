import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPizza } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent implements OnInit {

  pizza: IPizza | null = null;
  errorFetchingData = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pizza = this.activatedRoute.snapshot.data?.['pizza'];
  };
};