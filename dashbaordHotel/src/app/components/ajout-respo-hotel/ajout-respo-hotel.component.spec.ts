import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRespoHotelComponent } from './ajout-respo-hotel.component';

describe('AjoutRespoHotelComponent', () => {
  let component: AjoutRespoHotelComponent;
  let fixture: ComponentFixture<AjoutRespoHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRespoHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutRespoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
