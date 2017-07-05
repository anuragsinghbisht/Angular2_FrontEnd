import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ProductList } from './product-list';
import { Product } from './product';

@Injectable()
export class ProductService {
  private url = 'http://localhost:3000/api/products';

  constructor(private http: Http) { }

  getData(): Promise<ProductList> {
    return this.http.get(this.url)
              .toPromise()
              .then(res => {
                return res.json()[0] as ProductList
              })
              .catch(this.handleError)
  }

  getTitle(): Promise<string> {
    return this.getData().then(productList => productList.title);
  }

  getDescription(): Promise<string> {
    return this.getData().then(productList => productList.description);
  }

  getCategoryList(): Promise<string[]> {
    return this.getData().then(productList => {
      return productList.rows.reduce((categoryList, product) => {
        if(!categoryList.includes(product.category)) {
          categoryList.push(product.category);
        }
        return categoryList;
      },[]);
    });
  }

  getProducts(category: string): Promise<Product[]> {
    return this.getData().then(productList => {
      return productList.rows.filter((product) => product.category === category);
    });
  }

  getProduct(category: string, index: number): Promise<Product> {
    return this.getProducts(category).then(products => products[index]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
