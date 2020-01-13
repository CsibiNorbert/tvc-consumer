import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../_services/MovieService.service';
import { Movie } from '../_models/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-GetMovies',
  templateUrl: './GetMovies.component.html',
  styleUrls: ['./GetMovies.component.css']
})
export class GetMoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {

    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
 
    });

  }

}
