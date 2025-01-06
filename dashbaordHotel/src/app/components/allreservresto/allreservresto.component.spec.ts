import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreservrestoComponent } from './allreservresto.component';

describe('AllreservrestoComponent', () => {
  let component: AllreservrestoComponent;
  let fixture: ComponentFixture<AllreservrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreservrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreservrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
