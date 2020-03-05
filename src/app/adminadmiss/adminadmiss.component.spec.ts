import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadmissComponent } from './adminadmiss.component';

describe('AdminadmissComponent', () => {
  let component: AdminadmissComponent;
  let fixture: ComponentFixture<AdminadmissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminadmissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadmissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
