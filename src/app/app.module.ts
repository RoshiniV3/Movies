import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieInMemDataService } from './dashboard/services/movie-in-mem-data.service';
import { ListMoviesComponent } from './dashboard/components/list-movies/list-movies.component';
import { HttpClientMovieService } from './dashboard/services/http-client-movie.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderComponent } from './dashboard/components/header/header.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
// Reactive Form
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { FilterMoviesService } from './dashboard/services/filter-movies.service';
import { EnumToArrayPipe } from './dashboard/components/list-movies/enumToArray.pipe';
import { FilterPipe } from './dashboard/components/list-movies/filter.pipe';
import { SortPipe } from './dashboard/components/list-movies/sort.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    environment.production ?
    [] : InMemoryWebApiModule.forRoot(MovieInMemDataService)
  ],
  providers: [FilterMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
