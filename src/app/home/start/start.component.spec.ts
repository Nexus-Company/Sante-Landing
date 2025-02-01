import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStartComponent } from './start.component';

describe('HomeComponent', () => {
  let component: HomeStartComponent;
  let fixture: ComponentFixture<HomeStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
