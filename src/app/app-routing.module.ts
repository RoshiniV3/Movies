import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
      path: '', component: SignInComponent
  },
  {
    path: 'login', component: SignInComponent
},
  { path: 'dashboard', loadChildren: () => import('../../src/app/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


