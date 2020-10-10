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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './components/list-movies/enumToArray.pipe';
import { FilterPipe } from './components/list-movies/filter.pipe';
import { SortPipe } from './components/list-movies/sort.pipe';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
    DashboardRoutingModule,
    NgbRatingModule,
    environment.production ?
    [] : InMemoryWebApiModule.forRoot(MovieInMemDataService)
  ],
  providers: [FilterMoviesService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
