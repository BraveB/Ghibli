import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'films'},
  { path: 'films', component:  FilmsComponent},
  { path: '**', redirectTo: 'films' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
