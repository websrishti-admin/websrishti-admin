import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveSetComponent } from './descriptive-set.component';

describe('DescriptiveSetComponent', () => {
  let component: DescriptiveSetComponent;
  let fixture: ComponentFixture<DescriptiveSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptiveSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptiveSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
