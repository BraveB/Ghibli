import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmModel } from '../models/film.model';
import { Observable } from 'rxjs';
import { FilmDetailsModel } from '../models/filmDetails.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  baseUrl: string;
  private favoriteFilms: FilmModel[] = [];

  constructor(private http: HttpClient) {
    this.baseUrl = "https://ghibliapi.herokuapp.com/films";
  }

  async addToFavorite(id: string){
    this.getFilmDetails(id)
    .then(film =>{
      film.isFavorite = true;
      this.favoriteFilms.push(film)
    })
    .catch(error => console.error(error));
  }

  getFavoriteFilms(){
    return this.favoriteFilms;
  }

  async getFilmDetails(id: string): Promise<FilmDetailsModel>{
    return await this.http.get<FilmDetailsModel>(`${this.baseUrl}/${id}`).toPromise();
  }

  async getFilmsList(): Promise<FilmModel[]>{
    return await this.http.get<FilmModel[]>(this.baseUrl+'?fields=id,title,original_title_romanised,rt_score').toPromise();
  }

  async getFilmsFormatedList(): Promise<FilmModel[]>{
    let formatedList: FilmModel[] = [];
    await this.getFilmsList()
    .then(films => {
      formatedList = films
      for (var film of formatedList) {
        const index = this.favoriteFilms.findIndex(favorite => favorite.id==film.id);
        film.isFavorite = index > -1;
    }})
    .catch(error => console.log(error));
    return formatedList;
  }

  getOptionList(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'?fields=id,title');
  }

  removeFromFavorite(id: string){
    const index = this.favoriteFilms.findIndex(film => film.id==id);
    if(index > -1)
      this.favoriteFilms.splice(index, 1);
  }
}
