import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBurger } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.scss']
})
export class BurgerDetailsComponent implements OnInit {

  burger: IBurger | null = null;
  errorFetchingData = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.burger = this.activatedRoute.snapshot.data?.['burger'];
  };
};