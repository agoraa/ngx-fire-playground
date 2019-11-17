import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireEntityService } from 'ngx-fire';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService extends FireEntityService<User> {

  constructor(protected db: AngularFirestore) {
    super(db);
  }

}
