import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreservhotelsComponent } from './allreservhotels.component';

describe('AllreservhotelsComponent', () => {
  let component: AllreservhotelsComponent;
  let fixture: ComponentFixture<AllreservhotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreservhotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreservhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
