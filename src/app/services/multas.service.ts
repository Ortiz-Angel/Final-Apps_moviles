import { Injectable } from '@angular/core';
import { Multa } from '../models/multa.model';

@Injectable({
  providedIn: 'root',
})
export class MultasService {
  private multas: Multa[] = [
    {
      codigo: '001',
      nombre: 'Juan Pérez',
      motivo: 'Exceso de velocidad',
    },
    {
      codigo: '002',
      nombre: 'María Rodríguez',
      motivo: 'Estacionamiento prohibido',
    },
   
  ];

  constructor() {}

  getMultas(): Multa[] {
    return this.multas;
  }

  getMultaDetalle(codigo: string): Multa | undefined {
    return this.multas.find((multa) => multa.codigo === codigo);
  }
}
