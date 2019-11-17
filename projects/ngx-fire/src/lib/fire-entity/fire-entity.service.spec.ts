import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { FireEntity } from './fire-entity.model';
import { FireEntityService } from './fire-entity.service';

import { User, UserService, USERS,
         Post, PostService, POSTS } from '../mock';

class AngularFirestoreDocumentMock<T extends FireEntity> {
  id: string;
  entity: T;
  constructor(id: string, entity: T) { this.id = id; this.entity = entity; }
  valueChanges(): Observable<T> { return of(this.entity); }
}

class AngularFirestoreCollectionMock<T extends FireEntity> {
  name: string = undefined;
  mock: T[] = [];
  constructor(name: string, mock: T[]) { this.name = name; this.mock = mock }
  valueChanges(): Observable<T[]> { return of(this.mock); }
  doc(id: string): AngularFirestoreDocumentMock<T> {
    const idx = this.mock.indexOf(this.mock.find(x => x.id === id));
    return new AngularFirestoreDocumentMock<T>(id, idx == -1 ? null : this.mock[idx]);
  }
}

@Injectable()
class AngularFirestoreMock {
  collection<T extends FireEntity>(name: string): any {
    return {
      'users': new AngularFirestoreCollectionMock<User>('users', USERS),
      'posts': new AngularFirestoreCollectionMock<Post>('posts', POSTS)
    }[name];
  }
}

describe('FireEntityService', () => {

  let service: UserService;
  let db: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AngularFirestore, useClass: AngularFirestoreMock },
      ]
    });
    db = TestBed.get(AngularFirestore);
    service = TestBed.get(UserService);
  });

  describe('get$', () => {

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    // get$(id: string)

    it('should get user "0"', (done) => {
      service.get$('0').pipe(take(1)).subscribe((user: User) => {
        expect(user).toEqual({ id: '0', displayName: 'John' });
        done();
      });
    });

    it('should get user "2"', (done) => {
      service.get$('2').pipe(take(1)).subscribe((user: User) => {
        expect(user).toEqual({ id: '2', displayName: 'Catherine' });
        done();
      });
    });

    it('should get user null when id does not exist', (done) => {
      service.get$('99999').pipe(take(1)).subscribe((user: User) => {
        expect(user).toBe(null);
        done();
      });
    });

  });

  describe('find$', () => {

    it('should get all users', (done) => {
      service.find$().pipe(take(1)).subscribe((users: User[]) => {
        expect(users).toBe(USERS);
        done();
      });
    });

  });

  describe('List', () => {

    it('should create a FireList service', () => {
      const listName = 'list-test';
      const users = service.List(listName);
      expect(users).toBeTruthy();
      expect(users.name).toBe(listName);
    });

  });

});
