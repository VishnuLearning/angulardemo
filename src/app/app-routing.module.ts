import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'pizza',
    component: PizzaComponent,    
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
