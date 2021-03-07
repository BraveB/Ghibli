export class FilmDetailsModel {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  release_date: string;
  running_time: number;
  rt_score: number;

  constructor(id: string, title: string, original_title: string, original_title_romanised: string, description: string, release_date: string, running_time: number, rt_score: number){
    this.id = id;
    this.title = title;
    this.original_title = original_title;
    this.original_title_romanised = original_title_romanised;
    this.description = description;
    this.release_date = release_date;
    this.running_time = running_time;
    this.rt_score = rt_score;
  }
}
