import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeConstantsCollectionComponent } from './source-code-constants-collection.component';

describe('SourceCodeConstantsCollectionComponent', () => {
  let component: SourceCodeConstantsCollectionComponent;
  let fixture: ComponentFixture<SourceCodeConstantsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCodeConstantsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCodeConstantsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
