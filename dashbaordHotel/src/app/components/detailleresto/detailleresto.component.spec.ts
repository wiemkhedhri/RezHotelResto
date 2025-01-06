import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillerestoComponent } from './detailleresto.component';

describe('DetaillerestoComponent', () => {
  let component: DetaillerestoComponent;
  let fixture: ComponentFixture<DetaillerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
