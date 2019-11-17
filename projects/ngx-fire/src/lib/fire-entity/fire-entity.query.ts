import { QueryEntity } from '@datorama/akita';
import { FireEntityState, FireEntityStore } from './fire-entity.store';

export class FireEntityQuery extends QueryEntity<FireEntityState> {
  constructor(protected store: FireEntityStore) {
    super(store);
  }
}
