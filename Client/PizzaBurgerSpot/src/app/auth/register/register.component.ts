import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  };

  ngOnInit(): void {
  };

  errorMsg: boolean = false;
  msg: string = '';

  removeMsg(){
    setTimeout(() => {
      this.errorMsg = false;
      this.msg = '';
    }, 3000);
  };

  registerHandler(form: NgForm): void{
    if(form.invalid){
      return;
    };
    const {username, email, password, repass} = form.value;
    this.authService.register(username, email, password, repass).subscribe({
      next: (value) => {
        this.authService.user = value.user;
        sessionStorage.setItem('id', value.user._id);
        sessionStorage.setItem('username', value.user.username);
        sessionStorage.setItem('email', value.user.email);
        sessionStorage.setItem('token', value.token);
        form.reset();
        this.router.navigate(['/']);
        window.location.reload();
      },
      error: (err) => {
        this.msg = err.error.message;
        this.errorMsg = true;
        console.log(err.error.message);
      }
    });
  };
};