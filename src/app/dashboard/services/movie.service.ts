import { Movie } from '../classes/movie';
import { Observable } from 'rxjs';

export abstract class MoviesService {
  moviesUrl = 'api/movies';

  abstract getMovies(): Observable<Movie[]>;
  abstract getMovie(id: number): Observable<Movie>;
  abstract addMovie(name: string, episode: string): Observable<Movie>;
  abstract deleteMovie(movie: Movie | number): Observable<Movie>;
  abstract searchMovie(term: string): Observable<Movie[]>;
  abstract updateMovie(movie: Movie): Observable<Movie>;

}
