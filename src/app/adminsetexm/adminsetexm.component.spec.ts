import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsetexmComponent } from './adminsetexm.component';

describe('AdminsetexmComponent', () => {
  let component: AdminsetexmComponent;
  let fixture: ComponentFixture<AdminsetexmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsetexmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsetexmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
