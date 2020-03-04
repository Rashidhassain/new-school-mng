import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeestrucComponent } from './adminfeestruc.component';

describe('AdminfeestrucComponent', () => {
  let component: AdminfeestrucComponent;
  let fixture: ComponentFixture<AdminfeestrucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfeestrucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfeestrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
