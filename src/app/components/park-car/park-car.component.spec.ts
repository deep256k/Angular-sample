import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkCarComponent } from './park-car.component';

describe('ParkCarComponent', () => {
  let component: ParkCarComponent;
  let fixture: ComponentFixture<ParkCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
