import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAdvisoryComponent } from './marketing-advisory.component';

describe('MarketingAdvisoryComponent', () => {
  let component: MarketingAdvisoryComponent;
  let fixture: ComponentFixture<MarketingAdvisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingAdvisoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
