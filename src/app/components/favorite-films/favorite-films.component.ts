import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmModel } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-favorite-films',
  templateUrl: './favorite-films.component.html',
  styleUrls: ['./favorite-films.component.css']
})
export class FavoriteFilmsComponent implements OnInit {
  Films: FilmModel[];
  constructor(private filmService:FilmService, private router: Router) { }

  ngOnInit(): void {
    this.Films = this.filmService.getFavoriteFilms();
  }

  showFilms(){
    this.router.navigateByUrl(`/films`);
  }
}
