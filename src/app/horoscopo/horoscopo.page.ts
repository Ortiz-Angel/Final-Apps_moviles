import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from '../services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.page.html',
  styleUrls: ['./horoscopo.page.scss'],
})
export class HoroscopoPage implements OnInit {
  horoscopo: any = {};

  constructor(private horoscopoService: HoroscopoService) {}

  ngOnInit() {
    this.horoscopoService.getHoroscopo()
      .then(data => {
        this.horoscopo = data;
      })
      .catch(error => {
        console.error('Error obteniendo datos del horóscopo:', error);
      });
  }
}
