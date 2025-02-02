import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeConsultingComponent } from './creative-consulting.component';

describe('CreativeConsultingComponent', () => {
  let component: CreativeConsultingComponent;
  let fixture: ComponentFixture<CreativeConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
