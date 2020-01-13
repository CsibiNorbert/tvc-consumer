import {Routes} from '@angular/router';
import { GetMoviesComponent } from './GetMovies/GetMovies.component';
import { MovieDetailComponent } from './MovieDetail/MovieDetail.component';
//import { MovieDetailResolver } from './_resolvers/movie-detail.resolver';


// our routes that we can get the movies and add movies
export const appRoutes: Routes = [
    {
        path: '',
        component: GetMoviesComponent
    },
    {
        path: 'movie',
        component: MovieDetailComponent,
        //resolve: { movie: MovieDetailResolver}
    },
    {
        path: '**', // anything which doesn`t match what we have here, it will redirect to the home
        redirectTo: '', // redirects to..
        pathMatch: 'full' // we want to match the full path to the url
      }
];