import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRightComponent } from './content-right.component';

describe('ContentRightComponent', () => {
  let component: ContentRightComponent;
  let fixture: ComponentFixture<ContentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
