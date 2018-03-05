import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMetaComponent } from './page-meta.component';

describe('PageMetaComponent', () => {
  let component: PageMetaComponent;
  let fixture: ComponentFixture<PageMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
