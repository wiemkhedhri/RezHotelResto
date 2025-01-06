import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutresporestoComponent } from './ajoutresporesto.component';

describe('AjoutresporestoComponent', () => {
  let component: AjoutresporestoComponent;
  let fixture: ComponentFixture<AjoutresporestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutresporestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutresporestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
