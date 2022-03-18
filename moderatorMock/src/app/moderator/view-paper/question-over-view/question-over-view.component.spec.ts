import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOverViewComponent } from './question-over-view.component';

describe('QuestionOverViewComponent', () => {
  let component: QuestionOverViewComponent;
  let fixture: ComponentFixture<QuestionOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
