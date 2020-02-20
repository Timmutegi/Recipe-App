import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://test-es.edamam.com/search';
  params = new HttpParams().set('app_id', '8b98a5eb').set('app_key', 'd10fe27a9833609729f0b30397238b0f');

  constructor(public http: HttpClient) { }

  search(queryText: string) {
    return this.http.get<any>(this.baseUrl + queryText, {params: this.params});
  }

  getOne(queryText: string) {
    return this.http.get<any>(this.baseUrl + queryText, {params: this.params});
  }
}
