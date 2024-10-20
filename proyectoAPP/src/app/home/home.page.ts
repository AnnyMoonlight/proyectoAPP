import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [ 
    trigger('fadeIn', [
      state('void', style({
        opacity: 0  
      })),
      transition(':enter', [  
        animate('2s ease-in', style({
          opacity: 1  
        }))
      ])
    ])
  ]
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserFullName().subscribe(
      (nombreCompleto) => {
        this.username = nombreCompleto;
      },
      () => {
        this.username = 'Usuario no autenticado';
      }
    );
  }
}