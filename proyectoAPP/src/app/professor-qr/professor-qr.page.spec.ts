import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorQrPage } from './professor-qr.page';

describe('ProfessorQrPage', () => {
  let component: ProfessorQrPage;
  let fixture: ComponentFixture<ProfessorQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
