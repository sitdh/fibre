import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsSettingsDialogComponent } from './jenkins-settings-dialog.component';

describe('JenkinsSettingsDialogComponent', () => {
  let component: JenkinsSettingsDialogComponent;
  let fixture: ComponentFixture<JenkinsSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
