import { Exercise } from '../../core/models/exercise.model';

export interface HomeState {
  exercise: Exercise;
  loading: boolean;
  error: string;
}
