import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouthotelComponent } from './ajouthotel.component';

describe('AjouthotelComponent', () => {
  let component: AjouthotelComponent;
  let fixture: ComponentFixture<AjouthotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouthotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouthotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
