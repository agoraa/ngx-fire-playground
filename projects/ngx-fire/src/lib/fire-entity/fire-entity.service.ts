import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireEntity } from './fire-entity.model';
import { FireListService } from './fire-list.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

export class FireEntityService<T extends FireEntity> {

  constructor(protected db: AngularFirestore, public collection: string) {}

  get$(id: string): Observable<T> {
    return this.db.collection<T>(this.collection).doc<T>(id).valueChanges();
  }

  find$(req?: firebase.firestore.CollectionReference | firebase.firestore.Query) {
    return this.db.collection<T>(this.collection, ref => req).valueChanges();
  }

  List(listName: string) {
    const token = `fireList${listName}`;
    const injector: Injector = Injector.create({
      providers: [{
        provide: token,
        useFactory: () => new FireListService<T>(this.db, listName),
        deps: []
      }]
    });
    return injector.get(token);
  }

}
