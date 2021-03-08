import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteFilmsComponent } from './components/favorite-films/favorite-films.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'films'},
  { path: 'films', component:  FilmsComponent},
  { path: 'films/:filmId', component: FilmDetailsComponent },
  { path: 'favorites', component: FavoriteFilmsComponent },
  { path: '**', redirectTo: 'films' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
