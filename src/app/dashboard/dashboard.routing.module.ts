import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
       
        { path: '', loadChildren: () => import('./components/list-movies/list-movies.module').then(m => m.ListMoviesModule) },
        { path: 'dashboard/dashboard', loadChildren: () => import('./components/list-movies/list-movies.module').then(m => m.ListMoviesModule) },
      
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
