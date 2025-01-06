import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrestaurantComponent } from './ajoutrestaurant.component';

describe('AjoutrestaurantComponent', () => {
  let component: AjoutrestaurantComponent;
  let fixture: ComponentFixture<AjoutrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
