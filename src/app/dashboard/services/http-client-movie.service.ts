import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../classes/movie';
import { MoviesService } from './movie.service';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class HttpClientMovieService extends MoviesService {
  
  constructor(private http: HttpClient) {
    super();
   }

  getMovies(): Observable<Movie[]> {    
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      catchError(this.handleError)
    );
  }

  // get by id - will 404 when id not found
  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      catchError(this.handleError)
    );
  }

  addMovie(id: number,
    key:string,
    name: string,
    description: string,
    genres: string,
    rate:string,
    length:string,
    img:string,
    cover:string): Observable<Movie> {
    const movie = {id,
      key,
      name,
      description,
      genres,
      rate,
      length,
      img,
      cover};

    return this.http.post<Movie>(this.moviesUrl, movie, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteMovie(movie: number | Movie): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;

    return this.http.delete<Movie>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  searchMovie(term: string): Observable<Movie[]> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ?
    { params: new HttpParams().set('name', term)} : {};

    return this.http.get<Movie[]>(this.moviesUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.moviesUrl, movie, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }

}
