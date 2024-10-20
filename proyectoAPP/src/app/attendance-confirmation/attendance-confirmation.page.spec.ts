import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceConfirmationPage } from './attendance-confirmation.page';

describe('AttendanceConfirmationPage', () => {
  let component: AttendanceConfirmationPage;
  let fixture: ComponentFixture<AttendanceConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
