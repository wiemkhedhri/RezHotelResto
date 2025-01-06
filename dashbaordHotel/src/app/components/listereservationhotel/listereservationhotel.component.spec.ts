import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereservationhotelComponent } from './listereservationhotel.component';

describe('ListereservationhotelComponent', () => {
  let component: ListereservationhotelComponent;
  let fixture: ComponentFixture<ListereservationhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereservationhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListereservationhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
