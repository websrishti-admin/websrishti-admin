import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagramSetComponent } from './view-diagram-set.component';

describe('ViewDiagramSetComponent', () => {
  let component: ViewDiagramSetComponent;
  let fixture: ComponentFixture<ViewDiagramSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiagramSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiagramSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
