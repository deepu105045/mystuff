import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'dashboard',component: DashboardComponent },
  { path:'kitchen', component: KitchenComponent },
  { path:'login' , component:LoginComponent},
  { path:'', redirectTo:'/login' ,pathMatch:'full' },
  { path:'**', redirectTo:'/login' ,pathMatch:'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
