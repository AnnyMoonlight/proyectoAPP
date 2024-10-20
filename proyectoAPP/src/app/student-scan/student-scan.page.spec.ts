import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentScanPage } from './student-scan.page';

describe('StudentScanPage', () => {
  let component: StudentScanPage;
  let fixture: ComponentFixture<StudentScanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
