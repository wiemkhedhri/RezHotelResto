import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutimagehotelComponent } from './ajoutimagehotel.component';

describe('AjoutimagehotelComponent', () => {
  let component: AjoutimagehotelComponent;
  let fixture: ComponentFixture<AjoutimagehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutimagehotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutimagehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
