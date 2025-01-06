import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerestaurantComponent } from './listerestaurant.component';

describe('ListerestaurantComponent', () => {
  let component: ListerestaurantComponent;
  let fixture: ComponentFixture<ListerestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
