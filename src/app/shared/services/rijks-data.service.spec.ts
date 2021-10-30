import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ArtObject, ArtObjectDetails, ArtObjectPageDetails, Collection } from '../models/rijks-data.model';
import { RijksDataService } from './rijks-data.service';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;
const authkey = `?key=${API_KEY}`;

describe('RijksDataService', () => {
  let service: RijksDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RijksDataService]
    });
    service = TestBed.inject(RijksDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get response from api for getFeaturedCollection() observable', () => {
    const artsData = ['test'] as unknown as ArtObject[];
    const httpData = { artObjects: artsData } as unknown as Collection;

    service.getFeaturedCollection().subscribe(data => {
      expect(data).toEqual(artsData);
    });
    const request = httpMock.expectOne(`${API_URL}${authkey}`);
    expect(request.request.method).toBe('GET');
    request.flush(httpData);
  });

  it('should get response from api for getCollectionByObjectId() observable', () => {
    const artsData = 'test' as unknown as ArtObjectDetails;
    const httpData = { artObject: artsData } as unknown as ArtObjectPageDetails;

    service.getCollectionByObjectId('test').subscribe(data => {
      expect(data).toEqual(artsData);
    });
    const request = httpMock.expectOne(`${API_URL}${'test'}${authkey}`);
    expect(request.request.method).toBe('GET');
    request.flush(httpData);
  });

  it('should get response from api for getCollectionByMaker() observable', () => {
    const artsData = ['test'] as unknown as ArtObject[];
    const httpData = { artObjects: artsData } as unknown as Collection;

    service.getCollectionByMaker('test').subscribe(data => {
      expect(data).toEqual(artsData);
    });
    const request = httpMock.expectOne(`${API_URL}${authkey}&involvedMaker=${'test'}`);
    expect(request.request.method).toBe('GET');
    request.flush(httpData);
  });
});
