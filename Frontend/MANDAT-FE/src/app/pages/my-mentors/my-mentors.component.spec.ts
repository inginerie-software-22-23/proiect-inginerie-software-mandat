import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMentorsComponent } from './my-mentors.component';

describe('MyMentorsComponent', () => {
  let component: MyMentorsComponent;
  let fixture: ComponentFixture<MyMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMentorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
