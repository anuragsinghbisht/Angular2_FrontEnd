import { InfoModel } from '../../core/models/info.model';

export interface HomeState {
  info: InfoModel;
  loading: boolean;
  error: string;
}
