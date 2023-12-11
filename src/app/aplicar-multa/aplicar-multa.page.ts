import { Component } from '@angular/core';

@Component({
  selector: 'app-aplicar-multa',
  templateUrl: './aplicar-multa.page.html',
  styleUrls: ['./aplicar-multa.page.scss'],
})
export class AplicarMultaPage {
  cedulaInfractor: string = '';
  placaVehiculo: string = '';
  motivoMulta: string = '';
  fotoEvidencia: File | null = null;
  comentario: string = '';
  latitud: string = '';
  longitud: string = '';
  fecha: string = '';

  datosMulta: any = {};

  motivos: string[] = ['Exceso de velocidad', 'Estacionamiento indebido', 'Semáforo en rojo', 'Otro'];

  constructor() {}
  
  isObject(value: any): boolean {
    return typeof value === 'object';
  }

  onFileChange(event: any) {
    const file: File | null = event.target.files && event.target.files.length > 0
      ? event.target.files[0]
      : null;

    this.fotoEvidencia = file;

    if (this.fotoEvidencia instanceof File) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Mostrar la imagen después de seleccionarla
        this.datosMulta.fotoEvidencia = e.target.result;
      };
      reader.readAsDataURL(this.fotoEvidencia);
    }
  }

  guardarMulta() {
    // Guardar datos en datosMulta
    this.datosMulta = {
      cedulaInfractor: this.cedulaInfractor,
      placaVehiculo: this.placaVehiculo,
      motivoMulta: this.motivoMulta,
      fotoEvidencia: this.fotoEvidencia, 
      comentario: this.comentario,
      latitud: this.latitud,
      longitud: this.longitud,
      fecha: this.fecha,
    };
  }
}
