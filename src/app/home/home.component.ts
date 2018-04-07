import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenGuardService } from '../authen-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private username: string

	events = []

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

	showFiller = false

  constructor(
    private route: Router,
    private ag: AuthenGuardService
  ) { 
    ag.currentObservedUser().subscribe(u => {
      if (null != u) {
        route.navigate(['/dashboard'])
      }
    })
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.username = params['username']
    // })
  }

}
