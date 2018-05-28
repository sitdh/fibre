import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeControlFlowGraphComponent } from './source-code-control-flow-graph.component';

describe('SourceCodeControlFlowGraphComponent', () => {
  let component: SourceCodeControlFlowGraphComponent;
  let fixture: ComponentFixture<SourceCodeControlFlowGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCodeControlFlowGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCodeControlFlowGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
