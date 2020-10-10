import { Component, OnInit } from '@angular/core';
import { HttpClientMovieService } from '../../services/http-client-movie.service';
import { Movie } from '../../classes/movie';
import { FilterMoviesService } from '../../services/filter-movies.service';
import { NavigationEnd, Router } from '@angular/router';
import { Genre } from '../../classes/genre';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  showgenre=false;
  movies: Movie[] = null;
  visibleMovies: Movie[] = null;

  searchText: any = '';
  sortBy: any = 'id';

  public genres = Genre;
  selectedGenre = 'all';

  constructor(
    private movieService: HttpClientMovieService,
    private filterMoviesService: FilterMoviesService,
    private router: Router,
    private location: Location) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.selectedGenre = this.getParameterByName('filter', event.url) || 'all';
      });
    }
  ngOnInit(): void {
  this.getMovies()
  }

  

  getMovies() {
    this.movieService.getMovies().subscribe(data => { 
      this.movies = data;
    });    
  }
  changeFilter(event: any) {
    event.preventDefault();
    const targetGenre = event.target.innerText.toLowerCase();
    this.location.go(`?filter=${targetGenre}`);
    this.applyFilter(targetGenre);
  }
  
  private applyFilter(filterBy: string) {
    this.selectedGenre = filterBy;
    this.visibleMovies = this.filterMoviesService.filterMovies(filterBy.toLowerCase(), this.movies);
  }
  
  private getParameterByName(name: string, url: string) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  private changegenre(){
    this.showgenre=!this.showgenre;
    if(this.showgenre==false){
      this.visibleMovies=undefined;
    }
  }

}
