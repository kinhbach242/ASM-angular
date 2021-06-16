import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkiComponent } from './dangki.component';

describe('DangkiComponent', () => {
  let component: DangkiComponent;
  let fixture: ComponentFixture<DangkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
