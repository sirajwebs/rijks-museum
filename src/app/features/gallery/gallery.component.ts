import { Component, OnInit } from '@angular/core';
import { ArtObjects } from 'src/app/shared/models/rijks-data.model';
import { RijksDataService } from './../../shared/services/rijks-data.service';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, mapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  artObjects$ = new Observable<ArtObjects[] | null>();
  apiLoading$ = new Observable<boolean>();
  apiError$ = new Observable<boolean>();

  constructor(
    private readonly rijksDataService: RijksDataService,
  ) { }

  ngOnInit(): void {
    /*
     * call to the API to get art collection data 
     * `artObjects$` reads api data, `apiLoading$` handles api loading state, `apiError$` handles api error state
     */
    this.artObjects$ = this.rijksDataService.getArtObjects().pipe(catchError(() => of(null)));
    this.apiLoading$ = this.artObjects$.pipe(mapTo(false), startWith(true), distinctUntilChanged());
    this.apiError$ = this.artObjects$.pipe(map((value) => !value));
  }
}
