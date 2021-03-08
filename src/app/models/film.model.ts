export class FilmModel {
  id: string;
  title: string;
  original_title_romanised: string;
  rt_score: number;
  isFavorite: boolean;

  constructor(id: string, title: string, original_title_romanised: string, rt_score: number, isFavorite: boolean){
    this.id = id;
    this.title = title;
    this.original_title_romanised = original_title_romanised;
    this.rt_score = rt_score;
    this.isFavorite = isFavorite;
  }
}
