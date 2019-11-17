import { Injectable, Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireEntity } from './fire-entity.model';
import { FireEntityStore } from './fire-entity.store';
import { FireEntityQuery } from './fire-entity.query';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

export class FireListService<T extends FireEntity> {

  private _store: FireEntityStore = new FireEntityStore(this.name);
  private _query: FireEntityQuery = new FireEntityQuery(this._store);

  all: T[] = [];
  active: T = null;

  get length(): number { return this.all.length; }

  constructor(protected db: AngularFirestore, public name: string) {}

}
