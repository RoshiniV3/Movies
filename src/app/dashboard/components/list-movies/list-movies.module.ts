import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './enumToArray.pipe';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';

import { HttpClientModule } from '@angular/common/http';

import { ListMoviesComponent } from './list-movies.component';
import { HttpClientMovieService } from '../../services/http-client-movie.service';
import { FilterMoviesService } from '../../services/filter-movies.service';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



  

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbRatingModule,
        NgbModule,
        NguCarouselModule,
        RouterModule.forChild([
            { path: '', component: ListMoviesComponent },
            { path: 'movies', component: ListMoviesComponent },
            { path: ':id/:title', component: MovieDetailComponent },
            { path: 'movies/:id/:title', component: MovieDetailComponent }
          ]),
    ],
    declarations: [
        ListMoviesComponent,
        MovieDetailComponent,
        EnumToArrayPipe,
        FilterPipe,
        SortPipe

    ],
    exports:[
        EnumToArrayPipe,
        FilterPipe,
        SortPipe
    ],
    providers: [
        HttpClientModule,
        
        HttpClientMovieService,
   FilterMoviesService,
   EnumToArrayPipe,
        FilterPipe,
        SortPipe

    ]
})
export class ListMoviesModule {}






