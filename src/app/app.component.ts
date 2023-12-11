import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tarifario de multas', url: '/tarifario-multas', icon: 'newspaper' },
    { title: 'Vehículo por placa.', url: '/consulta-vehiculo', icon: 'car-sport' },
    { title: 'Conductor por licencia', url: '/consulta-conductor', icon: 'search' },
    { title: 'Aplicar Multa', url: '/aplicar-multa', icon: 'cash' },
    { title: 'Multas Registradas', url: '/multas-list', icon: 'list' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Estado del Clima', url: '/clima', icon: 'partly-sunny' },
    { title: 'horoscopo', url: '/horoscopo', icon: 'sunny' },
    { title: 'Cerrar Sesión', url: '/home', icon: 'exit' }
    
  ];

  isLoggedIn = false;

  constructor(private router: Router) {}

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
