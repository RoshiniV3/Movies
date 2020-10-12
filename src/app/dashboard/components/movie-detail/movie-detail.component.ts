import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClientMovieService } from '../../services/http-client-movie.service';
import { Movie } from '../../classes/movie';
import { AuthenticationService } from 'src/app/login-services/_services';
import { User } from 'src/app/login-services/_models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
 addProfileForm: FormGroup;

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = null;
  addProfileForm: FormGroup;
  error: string = null;
  ratingon=false;
  commenton=false;
  currentUser: User;
  newid=0;
  showribbon=false;role: string;
  normalload=true;
;
  constructor(
    private httpClientMovieService: HttpClientMovieService,
    public authenticationService:AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
     private modalService: NgbModal,
    public router:Router) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovie(+id);
    this.authenticationService.currentUser.subscribe(x =>{
      this.currentUser = x;
      console.log(this.role);
    } );
    this.addProfileForm = this.fb.group({
      id: [],
      key:[''],
      name: [''],
      description: [''],
      genres: [''],
      rate:[''],
      length:[''],
      img:[''],
      cover:['']
     });
  }

  getMovie(id: number) {
    this.httpClientMovieService.getMovie(id)
    .subscribe(
      data => this.movie = data,
      err => this.error = err
    );
  }

  moviedelete(id:number){
    this.newid=id;
    this.httpClientMovieService.deleteMovie(id)
    .subscribe(
      data => {

        window.alert("movie is deleted");
       
        this.findnewmovie(this.newid)
      },

      err => window.alert(err)
    );
  }

  findnewmovie(id){
    this.httpClientMovieService.getMovie(id+1)
    .subscribe(
      data => {
        this.movie = data;
        this.showribbon=true;
      },
      err => this.error = err
    );
  }

  openModal(targetModal) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });

   }
   onSubmit() {
    this.modalService.dismissAll();
    console.log("res:", this.addProfileForm.getRawValue());
    this.httpClientMovieService.addMovie(
      parseInt(this.addProfileForm.getRawValue().id),
      this.addProfileForm.getRawValue().key,
      this.addProfileForm.getRawValue(). name,
      this.addProfileForm.getRawValue().description,
      this.addProfileForm.getRawValue().genres,
      this.addProfileForm.getRawValue().rate,
      this.addProfileForm.getRawValue(). length,
      this.addProfileForm.getRawValue().img,
      this.addProfileForm.getRawValue().cover
    )  .subscribe(
      data => {
        alert("Movie is added");
        console.log(data);
       
      },
      err => this.error = err
    );
    
   }

}
