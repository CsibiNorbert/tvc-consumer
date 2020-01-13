import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../_models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  baseUrl = environment.apiUrl + 'movie/';
constructor(private http: HttpClient) { }

addMovie(movie: Movie){
  return this.http.post(this.baseUrl  + 'addmovie', movie);
}

getMovies(): Observable<Movie[]> {
  const moviesArray =  this.http.get<Movie[]>(this.baseUrl + 'getmovies');
  return moviesArray;
}
}
