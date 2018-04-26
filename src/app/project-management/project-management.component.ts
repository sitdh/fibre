import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(p => console.log(p))
  }

  ngOnInit() {
    
  }

}
