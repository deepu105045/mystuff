import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LoginComponent } from './components/login/login.component';
import { LiveQaComponent } from './components/savaal/live-qa/live-qa.component';
import { SavaalAdminComponent } from './components/savaal/savaal-admin/savaal-admin.component';
import { SavaalHomeComponent } from './components/savaal/savaal-home/savaal-home.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [

  { path:'signin', component:SigninComponent },
  { path:'dashboard',component: DashboardComponent, canActivate:[AuthGuard]  },
  { path:'kitchen',  component: KitchenComponent,   canActivate:[AuthGuard]  },
  { path:'login' ,   component:LoginComponent  },
  { path:'savaal' ,  component:SavaalHomeComponent  },
  { path:'savaal/admin' ,  component:SavaalAdminComponent  },
  { path:'savaal/:id' ,  component:LiveQaComponent  },
  { path:'',   redirectTo:'/login' ,  pathMatch:'full'   },
  { path:'**', redirectTo:'/login' ,  pathMatch:'full'   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
