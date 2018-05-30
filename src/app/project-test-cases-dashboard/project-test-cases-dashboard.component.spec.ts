import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTestCasesDashboardComponent } from './project-test-cases-dashboard.component';

describe('ProjectTestCasesDashboardComponent', () => {
  let component: ProjectTestCasesDashboardComponent;
  let fixture: ComponentFixture<ProjectTestCasesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTestCasesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTestCasesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
