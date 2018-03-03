import { Component, OnInit, Input } from '@angular/core';

import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input('appTitle') public title: string

  public docorator = 'none'

  private items = []

  constructor(
    private menuItemService: MenuItemService
  ) { }

  ngOnInit() {
    this.retrieveRegisteredItems()
  }

  retrieveRegisteredItems() {
    this.menuItemService.menuItems()
      .subscribe( items => this.items = items )
  }

}
