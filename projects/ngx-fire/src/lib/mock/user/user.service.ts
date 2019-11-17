import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireEntityService } from '../../fire-entity/fire-entity.service';
import { FireCollectionConfig } from '../../utils';
import { User } from './user.model';

@Injectable()
export class UserService extends FireEntityService<User> {
  constructor(db: AngularFirestore) { super(db, 'users'); }
}
