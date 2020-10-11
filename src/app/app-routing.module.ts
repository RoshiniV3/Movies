import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './login-services/_helpers';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
},

  { path: '',loadChildren: () => import('../../src/app/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


