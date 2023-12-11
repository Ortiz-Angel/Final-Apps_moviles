// clima.service.ts

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private apiKey = 'f24354e05d71d4559b4752f79321708c';

  constructor() {}

  getClimaSantoDomingo(): Promise<any> {
    // Coordenadas de Santo Domingo, República Dominicana
    const latitud = 18.4861;
    const longitud = -69.9312;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${this.apiKey}`;

    return axios.get(apiUrl)
      .then(response => this.formatWeatherData(response.data))
      .catch(error => {
        console.error('Error al obtener datos meteorológicos:', error);
        throw error;
      });
  }

  private formatWeatherData(data: any): any {
    // Convierte la temperatura de Kelvin a Celsius y redondea a un entero
    data.main.temp = Math.round(data.main.temp - 273.15);
    return data;
  }
}

