import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTestReportComponent } from './project-test-report.component';

describe('ProjectTestReportComponent', () => {
  let component: ProjectTestReportComponent;
  let fixture: ComponentFixture<ProjectTestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
