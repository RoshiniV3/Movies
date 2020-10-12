import { Movie } from '../classes/movie';
import { Observable } from 'rxjs';

export abstract class MoviesService {
  moviesUrl = 'api/movies';

  abstract getMovies(): Observable<Movie[]>;
  abstract getMovie(id: number): Observable<Movie>;
  abstract addMovie(     id: number,
    key:string,
    name: string,
    description: string,
    genres: string,
    rate:string,
    length:string,
    img:string,
    cover:string): Observable<Movie>;
  abstract deleteMovie(movie: Movie | number): Observable<Movie>;
  abstract updateMovie(movie: Movie): Observable<Movie>;

}
