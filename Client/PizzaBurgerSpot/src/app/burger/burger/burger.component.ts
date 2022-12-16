import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  user: IUser | null = null ;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

}
