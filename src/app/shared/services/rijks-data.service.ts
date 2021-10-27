import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;
const authkey = `?key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class RijksDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    /* 
     * to get the data
     */
    return this.http.get<any>(`${API_URL}${authkey}`)
      .pipe(publishReplay(1), refCount());
  }
}
