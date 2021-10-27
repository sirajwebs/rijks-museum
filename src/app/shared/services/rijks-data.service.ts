import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArtObjects } from '../models/rijks-data.model';
import { Collection } from './../models/rijks-data.model';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;
const authkey = `?key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class RijksDataService {

  constructor(private http: HttpClient) { }

  getArtObjects(): Observable<ArtObjects[]> {
    /* 
     * to get the data art Objects from all collection
     */
    return this.http.get<Collection>(`${API_URL}${authkey}`)
      .pipe(
        map((collection: Collection) => collection.artObjects),
        publishReplay(1),
        refCount(),
      );
  }
}
