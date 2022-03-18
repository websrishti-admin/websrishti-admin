import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionSetComponent } from './instruction-set.component';

describe('InstructionSetComponent', () => {
  let component: InstructionSetComponent;
  let fixture: ComponentFixture<InstructionSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
