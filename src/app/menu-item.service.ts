import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MenuItem } from './menu-item.model';

@Injectable()
export class MenuItemService {

  constructor() { }

  public menuItems(): Observable<any[]> {
    return of([
      {id: 4, route: '/hi', title: 'hi'},
      {id: 5, route: '/hello', title: 'hello'},
      {id: 6, route: '/fine', title: 'fine'},
      {id: 7, route: '/world', title: 'world'},
    ]);
  }
}
