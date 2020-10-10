import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClientMovieService } from '../../services/http-client-movie.service';
import { Movie } from '../../classes/movie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = null;
  error: string = null;

  constructor(
    private httpClientMovieService: HttpClientMovieService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovie(+id);
  }

  getMovie(id: number) {
    this.httpClientMovieService.getMovie(id)
    .subscribe(
      data => this.movie = data,
      err => this.error = err
    );
  }
}