import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnonstaffComponent } from './adminnonstaff.component';

describe('AdminnonstaffComponent', () => {
  let component: AdminnonstaffComponent;
  let fixture: ComponentFixture<AdminnonstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnonstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnonstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
