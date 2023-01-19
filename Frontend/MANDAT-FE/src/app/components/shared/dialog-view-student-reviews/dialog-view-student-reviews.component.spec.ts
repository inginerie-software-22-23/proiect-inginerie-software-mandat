import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewStudentReviewsComponent } from './dialog-view-student-reviews.component';

describe('DialogViewStudentReviewsComponent', () => {
  let component: DialogViewStudentReviewsComponent;
  let fixture: ComponentFixture<DialogViewStudentReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewStudentReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewStudentReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
