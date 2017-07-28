import { Product } from '../../core/models/product';

export interface ProductListState {
  products: Product[];
  loading: boolean;
  error: string;
}
