import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeTestPathsAnalyzerComponent } from './source-code-test-paths-analyzer.component';

describe('SourceCodeTestPathsAnalyzerComponent', () => {
  let component: SourceCodeTestPathsAnalyzerComponent;
  let fixture: ComponentFixture<SourceCodeTestPathsAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCodeTestPathsAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCodeTestPathsAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
