import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../_services/MovieService.service';
import { Movie } from '../_models/Movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-MovieDetail',
  templateUrl: './MovieDetail.component.html',
  styleUrls: ['./MovieDetail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  addMovieForm: FormGroup;
  
  constructor(private movieService: MovieServiceService,  private fb: FormBuilder) { }

  ngOnInit() {
    this.createMovieForm();
  }

  createMovieForm() {
    this.addMovieForm = this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],

      contributor: ['', Validators.required],
    });
  }

  addMovie(){
    if(this.addMovieForm.valid){
      this.movie = Object.assign({},this.addMovieForm.value); // take the input and adds it to the movie object

      this.movieService.addMovie(this.movie).subscribe(() => {
        // alertify
      }, 
      error => {
        //allertify
      });
    }
  }

}
