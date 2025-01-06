import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeresponsablerestoComponent } from './listeresponsableresto.component';

describe('ListeresponsablerestoComponent', () => {
  let component: ListeresponsablerestoComponent;
  let fixture: ComponentFixture<ListeresponsablerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeresponsablerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeresponsablerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
