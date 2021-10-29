import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, mapTo, startWith } from 'rxjs/operators';
import { ArtObject } from 'src/app/shared/models/rijks-data.model';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  featuredArtObjects$ = new Observable<ArtObject[] | null>();
  apiLoading$ = new Observable<boolean>();
  apiError$ = new Observable<boolean>();

  constructor(
    private readonly rijksDataService: RijksDataService,
  ) { }

  ngOnInit(): void {
    /*
     * call to the API to get art collection data 
     * `featuredArtObjects$` reads api data, `apiLoading$` handles api loading state, `apiError$` handles api error state
     */
    this.featuredArtObjects$ = this.rijksDataService.getFeaturedCollection().pipe(catchError(() => of(null)));
    this.apiLoading$ = this.featuredArtObjects$.pipe(mapTo(false), startWith(true), distinctUntilChanged());
    this.apiError$ = this.featuredArtObjects$.pipe(map((value) => !value));
  }
}
