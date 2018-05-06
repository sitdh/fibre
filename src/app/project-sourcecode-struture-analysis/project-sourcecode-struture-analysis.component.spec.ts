import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSourcecodeStrutureAnalysisComponent } from './project-sourcecode-struture-analysis.component';

describe('ProjectSourcecodeStrutureAnalysisComponent', () => {
  let component: ProjectSourcecodeStrutureAnalysisComponent;
  let fixture: ComponentFixture<ProjectSourcecodeStrutureAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSourcecodeStrutureAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSourcecodeStrutureAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
