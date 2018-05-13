import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationProgressComponent } from './project-creation-progress.component';

describe('ProjectCreationProgressComponent', () => {
  let component: ProjectCreationProgressComponent;
  let fixture: ComponentFixture<ProjectCreationProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreationProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreationProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
