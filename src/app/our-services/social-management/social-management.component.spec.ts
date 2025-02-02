import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialManagementComponent } from './social-management.component';

describe('SocialManagementComponent', () => {
  let component: SocialManagementComponent;
  let fixture: ComponentFixture<SocialManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
