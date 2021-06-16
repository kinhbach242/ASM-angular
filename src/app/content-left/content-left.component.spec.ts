import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLeftComponent } from './content-left.component';

describe('ContentLeftComponent', () => {
  let component: ContentLeftComponent;
  let fixture: ComponentFixture<ContentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
