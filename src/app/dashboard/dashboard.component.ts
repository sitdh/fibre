import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public projects = [
		{ name: 'hello', language: 'Java', path: '/p/sitdh/hello' },
		{ name: 'hello', language: 'Java', path: '/p/sitdh/hello' },
	]

  constructor() { }

  ngOnInit() {
  }

}
