import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosterModel } from 'src/app/models/poster.model';
import { FilmService } from 'src/app/services/film.service';
import { FilmDetailsModel } from '../../models/filmDetails.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  @Input() filmId:string;
  Poster: PosterModel;
  Film: FilmDetailsModel;
  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(response=>{
      this.filmService.getFilmDetails(response.filmId)
      .then(response => {
        this.Film = response;
        this.filmService.getPosterFormatedSource(response?.title)
        .then(path => this.Poster = path)
        .catch(pathError => console.error(pathError));
      })
      .catch(error=>console.error(error));
    });
  }
}
