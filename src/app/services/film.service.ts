import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmModel } from '../models/film.model';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://ghibliapi.herokuapp.com/films";
  }

  async getFilmsList(): Promise<FilmModel[]>{
    return await this.http.get<FilmModel[]>(this.baseUrl+'?fields=id,title,original_title_romanised,rt_score').toPromise();
  }

   getOptionList(): Observable<any[]> {
    return  this.http.get<any[]>(this.baseUrl+'?fields=id,title');
  }
}
