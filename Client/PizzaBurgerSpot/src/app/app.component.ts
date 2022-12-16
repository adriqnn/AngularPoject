import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PizzaBurgerSpot';
  
  constructor(private authService: AuthService){
  };
  
  ngOnInit(): void {
    if(sessionStorage.length > 0){
      this.authService.setProfile();
    };
  };

};
