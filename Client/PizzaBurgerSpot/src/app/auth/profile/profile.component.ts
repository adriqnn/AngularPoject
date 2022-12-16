import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser | null = null;
  errorFetchingData = false;
  date: string | null = null;

  constructor(private authService: AuthService) {
  };

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (value) => {
        this.user = value;
        const newDate = new Date(Number(value.createdAt));
        this.date = newDate.toLocaleString();
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    })
  };
};