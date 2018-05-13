import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationProgressDialogComponent } from './project-creation-progress-dialog.component';

describe('ProjectCreationProgressDialogComponent', () => {
  let component: ProjectCreationProgressDialogComponent;
  let fixture: ComponentFixture<ProjectCreationProgressDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreationProgressDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreationProgressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
