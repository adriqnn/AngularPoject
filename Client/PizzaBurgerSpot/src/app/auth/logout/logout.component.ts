import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.user = null;
        sessionStorage.clear();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err.error.message);
        this.router.navigate(['/']);
      }
    });
  };

  ngOnInit(): void {
  };
};