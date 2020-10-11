import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieInMemDataService } from './dashboard/services/movie-in-mem-data.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
// Reactive Form
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { FilterMoviesService } from './dashboard/services/filter-movies.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './login-services/_helpers'
import { JwtInterceptor, ErrorInterceptor } from './login-services/_helpers';
import { LoginComponent } from './components/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
  providers: [FilterMoviesService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
