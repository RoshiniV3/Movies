import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard.routing.module'
import { DashboardComponent } from './dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieInMemDataService } from './services/movie-in-mem-data.service';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { HttpClientMovieService } from './services/http-client-movie.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterMoviesService } from './services/filter-movies.service';

@NgModule({
  declarations: [
    DashboardComponent,
    ListMoviesComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.production ?
    [] : InMemoryWebApiModule.forRoot(MovieInMemDataService)
  ],
  providers: [FilterMoviesService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
