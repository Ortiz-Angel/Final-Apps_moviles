// clima.page.ts

import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  clima: any = {};

  constructor(private climaService: ClimaService) {}

  ngOnInit() {
    this.climaService.getClimaSantoDomingo()
      .then(data => {
        this.clima = data;
      })
      .catch(error => {
        console.error('Error al obtener datos meteorológicos:', error);
      });
  }
}
