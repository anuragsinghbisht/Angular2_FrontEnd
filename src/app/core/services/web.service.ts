import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  getTitleAndDescription() {
    return this.http.get(this.BASE_URL).map(res => res.json());
  }

  getCategories() {
    return this.http.get(`${this.BASE_URL}/category`).map(res => res.json());
  }

  getProducts(category) {
    return this.http.get(`${this.BASE_URL}/${category}/product`).map(res => res.json());
  }

  getProduct({ category, productId }) {
    return this.http.get(`${this.BASE_URL}/${category}/product/${productId}`).map(res => res.json());
  }

  submitProduct(product) {
    return this.http.post(`${this.BASE_URL}/product`, product).map(res => res.json());
  }

}
