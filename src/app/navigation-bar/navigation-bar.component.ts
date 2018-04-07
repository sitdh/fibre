import { Component, OnInit, Input } from '@angular/core';

import { MenuItemService } from '../menu-item.service';
import { UserInformationService } from '../user-information.service';
import { UserInformation } from '../user-information.entity';
import { AuthenGuardService } from '../authen-guard.service';

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
    private ag: AuthenGuardService
  ) { 
    this.ag.currentObservedUser().subscribe(u => {
      this.isAuthenticated = this.ag.isAuthenticated()
    })
  }

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
        if (null != user) {
          this.user = user
        }
      })
  }

  removeCurrentUser(e) {
    e.preventDefault()
    this.ag.signout()
  }

}
