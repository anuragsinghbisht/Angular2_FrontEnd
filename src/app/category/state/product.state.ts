import { Product } from '../../core/models/product.model';

export interface ProductState {
  product: Product[];
  loading: boolean;
  error: string;
}
