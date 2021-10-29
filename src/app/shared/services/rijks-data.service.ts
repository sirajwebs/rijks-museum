import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArtObject, ArtObjectDetails, ArtObjectPageDetails, Collection } from './../models/rijks-data.model';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;
const authkey = `?key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class RijksDataService {

  constructor(private http: HttpClient) { }

  getFeaturedCollection(): Observable<ArtObject[]> {
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

  getCollectionByObjectId(objectNumber: string): Observable<ArtObjectDetails> {
    /* 
     * to get the data of a art Object from all collection by assing object number as argument
     */
    return this.http.get<ArtObjectPageDetails>(`${API_URL}${objectNumber}${authkey}`)
      .pipe(
        map((artObjectPageDetails: ArtObjectPageDetails) => artObjectPageDetails.artObject),
        publishReplay(1),
        refCount(),
      );
  }

  getCollectionByMaker(maker: string): Observable<ArtObject[]> {
    /* 
     * to get the data of a art Object from all collection by maker name as argument
     */
    return this.http.get<Collection>(`${API_URL}${authkey}&involvedMaker=${maker}`)
      .pipe(
        map((collection: Collection) => collection.artObjects),
        publishReplay(1),
        refCount(),
      );
  }
}
