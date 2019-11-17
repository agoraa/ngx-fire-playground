import { FireEntity } from '../../fire-entity/fire-entity.model';

export interface Post extends FireEntity {
  text: string;
}
