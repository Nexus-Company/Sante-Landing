import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialProjectsComponent } from './editorial-projects.component';

describe('EditorialProjectsComponent', () => {
  let component: EditorialProjectsComponent;
  let fixture: ComponentFixture<EditorialProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorialProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
