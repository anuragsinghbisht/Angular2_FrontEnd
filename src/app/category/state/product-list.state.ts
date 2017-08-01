import { Product } from '../../core/models/product.model';

export interface ProductListState {
  products: Product[];
  loading: boolean;
  error: string;
}
