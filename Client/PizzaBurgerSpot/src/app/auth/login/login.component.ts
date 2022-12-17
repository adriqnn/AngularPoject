import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  };

  ngOnInit(): void {
    const params = this.activatedRoute.queryParams.subscribe(params => {
      this.redirectMsg = params['data'];
      // console.log(this.redirectMsg);
    });
  };

  errorMsg: boolean = false;
  msg: string = '';
  redirectMsg: string | undefined | null = null;

  removeMsg(){
    setTimeout(() => {
      this.errorMsg = false;
      this.msg = '';
    }, 3000);
  };



  loginHandler(form: NgForm): void{
    if(form.invalid){
      return;
    };
    const {username, password} = form.value;
    this.authService.login(username, password).subscribe({
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
        form.reset();
        console.log(err.error.message);
      }
    });
  };
};