import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttableComponent } from './ajouttable.component';

describe('AjouttableComponent', () => {
  let component: AjouttableComponent;
  let fixture: ComponentFixture<AjouttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
