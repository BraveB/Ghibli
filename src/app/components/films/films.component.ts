import { Component, OnInit } from '@angular/core';
import { FilmModel } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  Films: FilmModel[];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilmsList()
    .then(films => this.Films = films)
    .catch(error => console.log(error));
  }

  filmDetails(id:string){
    console.log(this.Films.find(element => element.id === id));
  }
}
