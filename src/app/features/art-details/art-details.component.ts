import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, map, mapTo, startWith, takeUntil } from 'rxjs/operators';
import { ArtObjectDetails } from './../../shared/models/rijks-data.model';
import { RijksDataService } from './../../shared/services/rijks-data.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.scss']
})
export class ArtDetailsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();

  artObjectDetails$ = new Observable<ArtObjectDetails | null>();
  apiLoading$ = new Observable<boolean>();
  apiError$ = new Observable<boolean>();

  constructor(
    private readonly rijksDataService: RijksDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    /*
    * this read the param value from url and pass it to the API to get art details data by collection ID 
    * `artObjectDetails$` reads api data, `apiLoading$` handles api loading state, `apiError$` handles api error state
    */
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.artObjectDetails$ = this.rijksDataService.getCollectionByObjectId(params.artId).pipe(catchError(() => of(null)));
        this.apiLoading$ = this.artObjectDetails$.pipe(mapTo(false), startWith(true), distinctUntilChanged());
        this.apiError$ = this.artObjectDetails$.pipe(map((value) => !value));
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
