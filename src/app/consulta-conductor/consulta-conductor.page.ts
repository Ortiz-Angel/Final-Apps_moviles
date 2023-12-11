// consulta-conductor.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-conductor',
  templateUrl: './consulta-conductor.page.html',
  styleUrls: ['./consulta-conductor.page.scss'],
})
export class ConsultaConductorPage {
  licencia: string = ''; // Declaración de la propiedad licencia

  datosConductor: any = {};

  // Agregar esta línea
  Object = Object;

  constructor() {}

  // Método modificado para asignar datos ficticios directamente
  consultarConductor() {
    const licenciasValidas = ['ABC123', 'XYZ789']; // Agregadas licencias adicionales

    if (licenciasValidas.includes(this.licencia)) {
      // Asignar datos ficticios según la licencia ingresada
      switch (this.licencia) {
        case 'ABC123':
          this.datosConductor = {
            foto: 'https://media.licdn.com/dms/image/D5603AQGHSugrbvEIOg/profile-displayphoto-shrink_800_800/0/1689342030828?e=2147483647&v=beta&t=KJ6cgLt5yDoOqvo-Zl85rIQcJub9AEapchvNkqc6U5o',
            nombre: 'Juan',
            apellido: 'Pérez',
            fecha_nacimiento: '01/01/1980',
            direccion: 'Calle Principal 123',
            telefono: '829-456-7890',
          };
          break;
        case 'XYZ789':
          this.datosConductor = {
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQbtPSXtC8qTGK4ZMkmGincqfk0wH5gFJwc0gnp2C9pRjkm5Mb920H4wag6SF7EnzPKBo&usqp=CAU',
            nombre: 'María',
            apellido: 'Rodríguez',
            fecha_nacimiento: '15/05/1992',
            direccion: 'Avenida Secundaria 456',
            telefono: '809-654-3210',
          };
          break;
        default:
          break;
      }
    } else {
      // Borrar datos si la licencia no coincide
      this.datosConductor = {};
    }
  }
}
