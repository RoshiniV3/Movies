import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClientMovieService } from '../../services/http-client-movie.service';
import { Movie } from '../../classes/movie';
import { AuthenticationService } from 'src/app/login-services/_services';
import { User } from 'src/app/login-services/_models';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = null;
  error: string = null;
  ratingon=false;
  commenton=false;
  currentUser: User;
  newid=0;
  constructor(
    private httpClientMovieService: HttpClientMovieService,
    public authenticationService:AuthenticationService,
    private activatedRoute: ActivatedRoute,
    public router:Router) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovie(+id);
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  getMovie(id: number) {
    this.httpClientMovieService.getMovie(id)
    .subscribe(
      data => this.movie = data,
      err => this.error = err
    );
  }

  moviedelete(id:number){
    this.newid=id+1;
    this.httpClientMovieService.deleteMovie(id)
    .subscribe(
      data => {

        window.alert("movie is deleted");
       
        this.findnewmovie()
      },

      err => window.alert(err)
    );
  }

  findnewmovie(){
    this.httpClientMovieService.getMovie(this.newid)
    .subscribe(
      data => this.movie = data,
      err => this.error = err
    );
  }
}
