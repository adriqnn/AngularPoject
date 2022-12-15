import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

const apiURL = environment.apiURL;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  errorMsg:boolean = false;
  msg: string = '';


  registerHandler(form: NgForm): void{
    if(form.invalid){
      return;
    };
    const {username, email, password, repass} = form.value;
    this.authService.register(username, email, password, repass).subscribe({
      next: (value) => {
        this.authService.user = value;
        console.log(value);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err.error.message);
      }
    })

    // console.log(username, email, password, repass);
    // console.log(`${apiURL}/auth/register`);

   
  }

}

//  return this.http.post<IUser>(`${apiURL}/auth/register`, {username, email, password, repass}).subscribe({
//       next: (value) => {
//         const username : string = value.username;
//         sessionStorage.setItem('token', username);
//         console.log(value);
//       },
//       error: (err) => {
//         this.errorMsg = true;
//         this.msg = err.error.message;
//         console.log(this.msg);
//         console.log(err.error.message);
//       }
//     });
