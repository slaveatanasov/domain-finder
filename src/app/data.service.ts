import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({providedIn:"root"})
export class DataService {
  constructor (private http: HttpClient) {
  }

  urlBase='https://api.domainsdb.info/v1/domains/search?domain=';
  urlQuery: string = 'facebook';


  getData() {
    return this.http.get<any>(this.urlBase + this.urlQuery);

  }

  getDataByQuery(query: string) {
    return this.http.get<any>(this.urlBase + query);
  }

}