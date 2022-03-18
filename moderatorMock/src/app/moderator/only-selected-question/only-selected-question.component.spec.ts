import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlySelectedQuestionComponent } from './only-selected-question.component';

describe('OnlySelectedQuestionComponent', () => {
  let component: OnlySelectedQuestionComponent;
  let fixture: ComponentFixture<OnlySelectedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlySelectedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlySelectedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
