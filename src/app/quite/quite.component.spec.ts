import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiteComponent } from './quite.component';

describe('QuiteComponent', () => {
  let component: QuiteComponent;
  let fixture: ComponentFixture<QuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
