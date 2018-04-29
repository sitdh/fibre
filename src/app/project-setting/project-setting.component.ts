import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'setting'
  }

}
