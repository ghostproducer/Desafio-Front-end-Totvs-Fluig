import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Cat {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  public httpHeadersTemplate: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.httpHeadersTemplate = new HttpHeaders();
  }

  teste() {
    return this.http.get ('http://localhost:8000/teste');
  }

  getAccessToken()  {
    return this.http.get ('http://localhost:8000/getAccessToken');
  }

}
