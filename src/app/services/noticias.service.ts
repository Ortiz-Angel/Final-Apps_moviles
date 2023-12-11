import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  noticias: any[] = [
    {
      titulo: "Digesett recibirá apoyo del Comisionado de Transporte de NY",
      fecha: "Agosto 5, 2023",
      autor: "J.C",
      contenido: "EL NUEVO DIARIO, NUEVA YORK. La Dirección General de Seguridad de Tránsito y Transporte Terrestre (Digesett) recibió el apoyo del comisionado de Transporte en la Ciudad de Nueva York, Ydanis Rodríguez. La Digesett define la visita del director general de la institución, general Ramón Antonio Guzmán Peralta, al Comisionado de Transporte en la ciudad de Nueva York, como exitosa y que dejó sus frutos. ",
    },
    {
      titulo: "La promesa del director general de la Digesett",
      fecha: "Enero 28, 2023",
      autor: "J.C",
      contenido: "El director general de Seguridad de Tránsito y Transporte Terrestre (Digesett), Ramón Guzmán Peralta, recorrió ayer el Centro de Retención Vehicular El Coco, mejor conocido como el canódromo, con representantes de organización de motoconchistas para mostrar las mejoras incorporadas en el despacho de motores que se encuentran en el lugar.",
    },
    {
      titulo: "Las muertes por accidentes han disminuido",
      fecha: "Agosto 3, 2022",
      autor: "J.C",
      contenido: "Las muertes por accidentes de tránsito han disminuido en en el país, afirmó este miércoles el director de la DIGESETT, general de brigada Ramón A. Guzmán Peralta.",
    },
  ];

  constructor() {}

  getNoticias(): any[] {
    return this.noticias;
  }
}

