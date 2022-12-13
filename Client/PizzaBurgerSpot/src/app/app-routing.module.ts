import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { BurgerIngredientComponent } from './burger/burger-ingredient/burger-ingredient.component';
import { HomeComponent } from './core/home/home.component';
import { PizzaIngredientComponent } from './pizza/pizza-ingredient/pizza-ingredient.component';
import { PizzaComponent } from './pizza/pizza/pizza.component';

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
        loginRequired: false
    }
},
{
    path:'pizzaIngredient',
    component: PizzaIngredientComponent,
    data: {
        title: 'Pizza Ingredients',
        loginRequired: false
    }
},
{
    path:'burgerIngredient',
    component: BurgerIngredientComponent,
    data: {
        title: 'Burger Ingredients',
        loginRequired: false
    }
},
{
    path:'pizzas',
    component: PizzaComponent,
    data: {
        title: 'Pizza',
        loginRequired: false
    }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
