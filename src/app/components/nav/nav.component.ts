import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public keyword = "title";
  public isCollapsed = true;
  public data$: Observable<any[]>;
  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.data$ = this.filmService.getOptionList();
  }

  movieDetails(film){
    this.router.navigateByUrl(`/films/${film.id}`);
  }
}
