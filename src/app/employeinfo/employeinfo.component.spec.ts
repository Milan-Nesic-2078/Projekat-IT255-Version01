import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeinfoComponent } from './employeinfo.component';

describe('EmployeinfoComponent', () => {
  let component: EmployeinfoComponent;
  let fixture: ComponentFixture<EmployeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
