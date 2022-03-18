import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTestsComponent } from './live-tests.component';

describe('LiveTestsComponent', () => {
  let component: LiveTestsComponent;
  let fixture: ComponentFixture<LiveTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
