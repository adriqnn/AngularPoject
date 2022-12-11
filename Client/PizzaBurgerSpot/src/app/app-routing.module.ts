import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'auth/login',
    component: LoginComponent,
    data: {
        title: 'Login',
        loginRequired: false
    }
},
{
    path:'auth/register',
    component: RegisterComponent,
    data: {
        title: 'Register',
        loginRequired: false
    }
},
{
    path:'auth/logout',
    component: LogoutComponent,
    data: {
        title: 'Logout',
        loginRequired: true
    }
},
{
    path:'auth/profile',
    component: ProfileComponent,
    data: {
        title: 'Profile',
        loginRequired: true
    }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
