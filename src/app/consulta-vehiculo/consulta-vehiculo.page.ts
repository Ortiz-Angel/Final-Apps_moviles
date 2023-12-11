import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-vehiculo',
  templateUrl: './consulta-vehiculo.page.html',
  styleUrls: ['./consulta-vehiculo.page.scss'],
})
export class ConsultaVehiculoPage {
  placa: string = ''; 

  datos: any = {};

  constructor() {}

  // Método modificado para asignar datos ficticios directamente
  consultarVehiculo() {
    const placasValidas = ['12ab45', '34cd67', '56ef89']; 

    if (placasValidas.includes(this.placa)) {
      // Asignar datos ficticios según la placa ingresada
      switch (this.placa) {
        case '12ab45':
          this.datos = {
            tipo_vehiculo: 'Carro',
            color: 'Azul',
            ano_fabricacion: 2020,
            propietario: 'Juan Pérez',
            estado: 'Nuevo',
            marca: 'Toyota',
          };
          break;
        case '34cd67':
          this.datos = {
            tipo_vehiculo: 'Camioneta',
            color: 'Rojo',
            ano_fabricacion: 2018,
            propietario: 'María Rodríguez',
            estado: 'Usado',
            marca: 'Honda',
          };
          break;
        case '56ef89':
          this.datos = {
            tipo_vehiculo: 'Motocicleta',
            color: 'Negro',
            ano_fabricacion: 2022,
            propietario: 'Pedro Gómez',
            estado: 'Nuevo',
            marca: 'Harley-Davidson',
          };
          break;
        default:
          break;
      }
    } else {
      this.datos = {};
    }
  }
}
