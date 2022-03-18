import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPapersComponent } from './test-papers.component';

describe('TestPapersComponent', () => {
  let component: TestPapersComponent;
  let fixture: ComponentFixture<TestPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
