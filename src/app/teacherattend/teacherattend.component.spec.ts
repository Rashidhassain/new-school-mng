import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherattendComponent } from './teacherattend.component';

describe('TeacherattendComponent', () => {
  let component: TeacherattendComponent;
  let fixture: ComponentFixture<TeacherattendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherattendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
