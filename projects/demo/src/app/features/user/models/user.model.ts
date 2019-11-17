import { FireEntity } from 'ngx-fire';

export interface User extends FireEntity {
  displayName: string;
  description: string;
}
