import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclassComponent } from './adminclass.component';

describe('AdminclassComponent', () => {
  let component: AdminclassComponent;
  let fixture: ComponentFixture<AdminclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
