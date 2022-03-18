import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppedTestsComponent } from './stopped-tests.component';

describe('StoppedTestsComponent', () => {
  let component: StoppedTestsComponent;
  let fixture: ComponentFixture<StoppedTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoppedTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoppedTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
