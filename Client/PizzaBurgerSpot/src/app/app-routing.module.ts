import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { BurgerIngredientDetailsComponent } from './burger/burger-ingredient-details/burger-ingredient-details.component';
import { BurgerIngredientComponent } from './burger/burger-ingredient/burger-ingredient.component';
import { BurgerComponent } from './burger/burger/burger.component';
import { BurgerIngredientResolver } from './burger/resolvers/burger.ingredient.resolver';
import { AboutComponent } from './core/about/about.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { ErrorComponent } from './core/error/error.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PizzaIngredientDetailsComponent } from './pizza/pizza-ingredient-details/pizza-ingredient-details.component';
import { PizzaIngredientComponent } from './pizza/pizza-ingredient/pizza-ingredient.component';
import { PizzaComponent } from './pizza/pizza/pizza.component';
import { PizzaIngredientResolver } from './pizza/resolvers/pizza.ingredient.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
        title: 'Home',
        loginRequired: false
    }
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    data: {
        title: 'About',
        loginRequired: false
    }
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ContactsComponent,
    data: {
        title: 'Contacts',
        loginRequired: false
    }
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
    path:'pizzas',
    component: PizzaComponent,
    data: {
        title: 'Pizzas',
        loginRequired: false
    }
},
{
    path:'burgers',
    component: BurgerComponent,
    data: {
        title: 'Burgers',
        loginRequired: false
    }
},
{
    path:'pizzas/pizzaIngredient',
    component: PizzaIngredientComponent,
    data: {
        title: 'Pizza Ingredients',
        loginRequired: false
    }
},
{
    path:'burgers/burgerIngredient',
    component: BurgerIngredientComponent,
    data: {
        title: 'Burger Ingredients',
        loginRequired: false
    }
},
{
    path:'pizzas/pizzaIngredient/:id',
    component: PizzaIngredientDetailsComponent,
    resolve:{
        pizzaIngredient: PizzaIngredientResolver 
    },
    data: {
        title: 'Pizzas',
        loginRequired: false
    }
},
{
    path:'burgers/burgerIngredient/:id',
    component: BurgerIngredientDetailsComponent,
    resolve:{
        burgerIngredient: BurgerIngredientResolver 
    },
    data: {
        title: 'Burgers',
        loginRequired: false
    }
},
{
    path:'not-found',
    component: NotFoundComponent,
    data: {
        title: 'NotFound',
        loginRequired: false
    }
},
{
    path:'**',
    component: ErrorComponent,
    data: {
        title: 'Error',
        loginRequired: false
    }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
