import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HoroscopoService {
  
  getHoroscopo(): Promise<any> {
    
    const horoscopoData = {
      signo: 'Aries',
      consejo: 'Mantente alerta y toma precauciones adicionales hoy, especialmente en tu entorno laboral.',
      alerta: 'Se recomienda utilizar equipo de protección y estar en constante comunicación con tus colegas.',
    };
    return Promise.resolve(horoscopoData);
  }
}