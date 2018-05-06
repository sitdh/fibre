import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBuildHistoryComponent } from './display-build-history.component';

describe('DisplayBuildHistoryComponent', () => {
  let component: DisplayBuildHistoryComponent;
  let fixture: ComponentFixture<DisplayBuildHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBuildHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBuildHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
