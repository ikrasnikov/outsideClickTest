import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { IItem } from '../../../types/item';

@Injectable()
export class TestPageService {

  public get items$(): Observable<IItem[]> {
    return this._items$$.asObservable();
  }


  private _items: IItem[] = [
    {
      duration: '0h 15m',
      image: 'https://img.youtube.com/vi/veSI8Y1BZZo/mqdefault.jpg',
      name: 'Ученые ПОДКЛЮЧИЛИ мозг червя к роботу и вот что получилось',
      type: 'video',
    },
    {
      duration: '',
      image: 'https://img.youtube.com/vi/9zOtVffMtsw/mqdefault.jpg',
      name: 'Квантовая физика для всех',
      type: 'article',
    },
    {
      duration: '',
      image: 'https://files-studytube-nl.s3-eu-west-1.amazonaws.com/dev-staging/documents/images/61/original/images1.png?1528985557',
      name: 'Какой-то очень важный документ',
      type: 'document',
    },
  ];

  private _items$$: ReplaySubject<IItem[]> = new ReplaySubject();

  public setElementQuantity(elementQuantity: number): void {
    const items: IItem[] = this._generateItems(elementQuantity);
    this._items$$.next(items);
  }


  private _generateItems(elementQuantity: number): IItem[] {
    const items: IItem[] = [];

    for (let i: number = 0; i < elementQuantity; i++) {
      items.push(this._getRandomItem());
    }

    return items;
  }

  private _getRandomItem(): IItem {
    const itemNumber: number = Math.round(0 - 0.5 + Math.random() * this._items.length);

    return this._items[itemNumber];
  }
}
