import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { _modelsComponent } from './_models/_models.component';
import { NavComponent } from './nav/nav.component';
import { GetMoviesComponent } from './GetMovies/GetMovies.component';
import { MovieDetailComponent } from './MovieDetail/MovieDetail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceService } from './_services/MovieService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      _modelsComponent,
      NavComponent,
      GetMoviesComponent,
      MovieDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
    ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [ MovieServiceService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
