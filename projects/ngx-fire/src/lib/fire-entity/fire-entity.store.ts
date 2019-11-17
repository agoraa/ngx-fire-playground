import { FireEntity } from './fire-entity.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface FireEntityState extends EntityState<FireEntity> { }

export class FireEntityStore extends EntityStore<FireEntityState> {
  constructor(name: string) {
    super(null, { name });
  }
}
