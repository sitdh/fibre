import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project.entity';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  @Input('project') projectInformation: Project;

  constructor() { }

  ngOnInit() {
    this.message = 'setting'
  }

}
