import { Component, OnInit } from '@angular/core';
import { HttpClientMovieService } from '../../services/http-client-movie.service';
import { Movie } from '../../classes/movie';
import { FilterMoviesService } from '../../services/filter-movies.service';
import { NavigationEnd, Router } from '@angular/router';
import { Genre } from '../../classes/genre';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { slider } from '../../slide-animation';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMoviesComponent implements OnInit, AfterViewInit {


  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 2, md: 2, lg: 5, all: 0 },
    speed: 0,
    point: {
      visible: true
    },
    touch: true
  };
    animation: 'lazy'
  tempData: any[];


  showgenre=false;
  movies: Movie[] = null;
  visibleMovies: Movie[] = null;
  searchText: any = '';
  sortBy: any = 'id';
  public genres = Genre;
  selectedGenre = 'all';  
  showcarousel= false;
  moviespopular: { id: number; key: string; name: string; description: string; genres: string[]; rate: string; length: string; img: string; cover: string; }[];
  showcarouselpopular: boolean;


  constructor(
    private movieService: HttpClientMovieService,
    private filterMoviesService: FilterMoviesService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private location: Location) {
     
    }
  ngOnInit(): void {
  this.getMovies()
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  

  getMovies() {
    this.movieService.getMovies().subscribe(data => { 
      this.movies = data;
      this.showcarousel=true;
      this.moviespopular=[];
    
     this.movies.forEach((x) => { 
       if (parseInt(x.rate) > 6.5){
        this.moviespopular.push(x)
       }
        
      });
      this.showcarouselpopular=true;
    }); 

 
    
  }
  changeFilter(event: any) {
    event.preventDefault();
    const targetGenre = event.target.innerText.toLowerCase();
    this.applyFilter(targetGenre);
  }
  
  private applyFilter(filterBy: string) {
    this.selectedGenre = filterBy;
    this.visibleMovies = this.filterMoviesService.filterMovies(filterBy.toLowerCase(), this.movies);
  }
  

  private changegenre(){
    this.showgenre=!this.showgenre;
    if(this.showgenre==false){
      this.visibleMovies=undefined;
    }
  }

}
