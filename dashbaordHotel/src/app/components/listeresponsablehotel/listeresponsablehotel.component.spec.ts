import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresponsablehotelComponent } from './listeresponsablehotel.component';

describe('ListeresponsablehotelComponent', () => {
  let component: ListeresponsablehotelComponent;
  let fixture: ComponentFixture<ListeresponsablehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeresponsablehotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeresponsablehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
