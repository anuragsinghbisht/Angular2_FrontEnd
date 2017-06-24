import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PRODUCTS } from './mock-list';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = PRODUCTS;
    return { products };
  }
}
