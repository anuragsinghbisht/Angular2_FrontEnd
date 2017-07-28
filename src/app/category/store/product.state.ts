import { Product } from '../../core/models/product';

export interface ProductState {
  product: Product[];
  loading: boolean;
  error: string;
}
