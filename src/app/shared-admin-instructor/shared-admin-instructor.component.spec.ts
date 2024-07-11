import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAdminInstructorComponent } from './shared-admin-instructor.component';

describe('SharedAdminInstructorComponent', () => {
  let component: SharedAdminInstructorComponent;
  let fixture: ComponentFixture<SharedAdminInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAdminInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedAdminInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
