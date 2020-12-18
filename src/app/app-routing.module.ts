import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [

  {
    path:'signin',
    component:SigninComponent
  },
  { 
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  { 
    path:'kitchen', 
    component: KitchenComponent,
    canActivate:[AuthGuard]
  },
  { 
    path:'login' , 
    component:LoginComponent
  },
 
  { path:'', 
    redirectTo:'/login' ,
    pathMatch:'full' 
  },
  { 
    path:'**', 
    redirectTo:'/login' ,
    pathMatch:'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
