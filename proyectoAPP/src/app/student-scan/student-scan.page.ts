import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-scan',
  templateUrl: './student-scan.page.html',
  styleUrls: ['./student-scan.page.scss'],
})
export class StudentScanPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  simulateScan() {
    alert('Simulando escaneo del código QR...');
    this.router.navigate(['/attendance-confirmation']);
  }

  ngOnInit() {
  }

  confirmAttendance() {
    this.router.navigate(['/attendance-confirmation']);
  }

  goBack() {
    this.location.back();
  }

}