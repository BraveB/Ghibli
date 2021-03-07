import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { FilmDetailsModel } from '../../models/filmDetails.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  @Input() filmId:string;
  Film: FilmDetailsModel;
  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.filmService.getFilmDetails(params.filmId)
      .then(params => this.Film = params)
      .catch(error=>console.log(error));
    });
  }
}
