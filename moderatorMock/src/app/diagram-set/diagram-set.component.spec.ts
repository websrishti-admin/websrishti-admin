import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramSetComponent } from './diagram-set.component';

describe('DiagramSetComponent', () => {
  let component: DiagramSetComponent;
  let fixture: ComponentFixture<DiagramSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
