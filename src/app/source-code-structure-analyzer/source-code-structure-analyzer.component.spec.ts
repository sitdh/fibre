import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeStructureAnalyzerComponent } from './source-code-structure-analyzer.component';

describe('SourceCodeStructureAnalyzerComponent', () => {
  let component: SourceCodeStructureAnalyzerComponent;
  let fixture: ComponentFixture<SourceCodeStructureAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCodeStructureAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCodeStructureAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
