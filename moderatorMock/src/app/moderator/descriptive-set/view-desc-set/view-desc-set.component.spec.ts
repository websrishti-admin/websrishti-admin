import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDescSetComponent } from './view-desc-set.component';

describe('ViewDescSetComponent', () => {
  let component: ViewDescSetComponent;
  let fixture: ComponentFixture<ViewDescSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDescSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDescSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
