import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AuthenticateGuard } from './gaurd/authenticate-guard.guard';

const routes: Routes = [
  { 
    path:"", component:HomeComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"products",component:ProductsComponent,canActivate: [AuthenticateGuard]
  },
  {
    path:"view-details",component:ResultsComponent,canActivate: [AuthenticateGuard]
  },
  {
    path:"search-result",component:SearchResultComponent,canActivate: [AuthenticateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
