import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBackComponent } from './to-back.component';

describe('ToBackComponent', () => {
  let component: ToBackComponent;
  let fixture: ComponentFixture<ToBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
