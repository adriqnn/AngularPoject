import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IBurger, IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.scss']
})
export class BurgerDetailsComponent implements OnInit {

  user: String | null = null;
  burger: IBurger | null = null;
  errorFetchingData = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('id');
    this.burger = this.activatedRoute.snapshot.data?.['burger'];
  };
};