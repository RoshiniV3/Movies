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
  



  

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ListMoviesComponent,
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






