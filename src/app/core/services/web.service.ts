import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000/api/products';

  constructor(private http: Http) {}

  getData() {
    return this.http.get(this.BASE_URL).map(res => res.json());
  }

}
