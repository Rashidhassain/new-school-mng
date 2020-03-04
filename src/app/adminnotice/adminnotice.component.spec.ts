import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnoticeComponent } from './adminnotice.component';

describe('AdminnoticeComponent', () => {
  let component: AdminnoticeComponent;
  let fixture: ComponentFixture<AdminnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
