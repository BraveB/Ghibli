import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmModel } from '../models/film.model';
import { Observable } from 'rxjs';
import { FilmDetailsModel } from '../models/filmDetails.model';
import { PosterModel } from '../models/poster.model';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  baseUrl: string;
  moviesUrl: string;
  private favoriteFilms: FilmModel[] = [];

  constructor(private http: HttpClient) {
    this.baseUrl = "https://ghibliapi.herokuapp.com/films";
    this.moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${environment.api_key}&query=`;
  }

  async addToFavorite(id: string){
    const index = this.favoriteFilms.findIndex(film => film.id==id);
    if(index > -1)
      return;

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
    .catch(error => console.error(error));
    return formatedList;
  }

  async getPosterFormatedSource(title: string): Promise<PosterModel>{
    let path: PosterModel = new PosterModel("");
    this.getPosterSource(encodeURI(title))
    .then(response=> {return path.poster_path = `https://image.tmdb.org/t/p/w342/${response.results[0].poster_path}`})
    .catch(error=> console.error(error));
    return path;
  }
  async getPosterSource(title: string): Promise<any>{
    return await this.http.get<any>(`${this.moviesUrl}${title}`).toPromise();
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
