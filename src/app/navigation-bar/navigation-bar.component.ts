import { Component, OnInit, Input } from '@angular/core';

import { MenuItemService } from '../menu-item.service';
import { UserInformationService } from '../user-information.service';
import { UserInformation } from '../user-information.entity';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input('appTitle') public title: string

  public isAuthenticated = false

  public docorator = 'none'

  private items = []

  private user: UserInformation

  constructor(
    private menuItemService: MenuItemService,
    private userInformation: UserInformationService,
  ) { }

  ngOnInit() {
    this.retrieveRegisteredItems()
    this.authenticateCheck()
  }

  retrieveRegisteredItems() {
    this.menuItemService.menuItems()
      .subscribe( items => this.items = items )
  }

  authenticateCheck() {
    this.userInformation.isAuthenticate()
      .subscribe( user => { 
        if (null == user) {
          this.isAuthenticate = false
        } else {
          this.userInfo = user;
        }
      })
  }

}
