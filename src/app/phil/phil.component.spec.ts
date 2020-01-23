import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilComponent } from './phil.component';

describe('PhilComponent', () => {
  let component: PhilComponent;
  let fixture: ComponentFixture<PhilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
