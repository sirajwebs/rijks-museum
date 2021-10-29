import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, mapTo, startWith } from 'rxjs/operators';
import { ArtObject } from './../../shared/models/rijks-data.model';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  artDetailsByMaker$ = new Observable<ArtObject[] | null>();
  apiLoading$ = new Observable<boolean>();
  apiError$ = new Observable<boolean>();

  constructor(
    private readonly rijksDataService: RijksDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    /*
    * this read the param value from url and pass it to the API to get art details data by collection ID 
    * `artDetailsByMaker$` reads api data, `apiLoading$` handles api loading state, `apiError$` handles api error state
    */
    this.route.params.subscribe((params) => {
      this.artDetailsByMaker$ = this.rijksDataService.getCollectionByMaker(params.query).pipe(catchError(() => of(null)));
      this.apiLoading$ = this.artDetailsByMaker$.pipe(mapTo(false), startWith(true), distinctUntilChanged());
      this.apiError$ = this.artDetailsByMaker$.pipe(map((value) => !value));
    });
  }
}
