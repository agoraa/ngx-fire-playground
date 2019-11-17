import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireEntityService } from '../../fire-entity/fire-entity.service';
import { Post } from './post.model';

@Injectable()
export class PostService extends FireEntityService<Post> {
  constructor(db: AngularFirestore) { super(db, 'posts'); }
}
