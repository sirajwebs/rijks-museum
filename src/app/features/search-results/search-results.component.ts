import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, map, mapTo, startWith, takeUntil } from 'rxjs/operators';
import { ArtObject } from './../../shared/models/rijks-data.model';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();

  artDetailsByMaker$ = new Observable<ArtObject[] | null>();
  apiLoading$ = new Observable<boolean>();
  apiError$ = new Observable<boolean>();
  searchedQuery = '';

  constructor(
    private readonly rijksDataService: RijksDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    /*
    * this read the param value from url and pass it to the API to get art details data by collection ID 
    * `artDetailsByMaker$` reads api data, `apiLoading$` handles api loading state, `apiError$` handles api error state
    */
    this.route.params
    .pipe(takeUntil(this.destroy$))
    .subscribe((params) => {
      this.searchedQuery = params.searchedQuery;
      this.artDetailsByMaker$ = this.rijksDataService.getCollectionByMaker(params.searchedQuery).pipe(catchError(() => of(null)));
      this.apiLoading$ = this.artDetailsByMaker$.pipe(mapTo(false), startWith(true), distinctUntilChanged());
      this.apiError$ = this.artDetailsByMaker$.pipe(map((value) => !value));
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
