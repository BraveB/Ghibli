import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmModel } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  constructor(private filmService: FilmService, private router: Router) { }
  @Input() Film: FilmModel;
  ngOnInit(): void {
  }

  filmDetails(id:string){
    this.router.navigateByUrl(`/films/${id}`);
  }

  toFavorite(film){
    if(!film.isFavorite){
      this.filmService.addToFavorite(film.id);
    }
    else{
      this.filmService.removeFromFavorite(film.id);
    }
    film.isFavorite = !film.isFavorite;
  }
}
