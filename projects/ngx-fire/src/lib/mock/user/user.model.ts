import { FireEntity } from '../../fire-entity/fire-entity.model';

export interface User extends FireEntity {
  displayName: string;
}
