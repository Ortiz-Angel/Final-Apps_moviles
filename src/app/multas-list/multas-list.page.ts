import { Component, OnInit } from '@angular/core';
import { MultasService } from '../services/multas.service';
import { Multa } from '../models/multa.model';

@Component({
  selector: 'app-multas-list',
  templateUrl: './multas-list.page.html',
  styleUrls: ['./multas-list.page.scss'],
})
export class MultasListPage implements OnInit {
  multas: Multa[] = []; 

  constructor(private multasService: MultasService) {}

  ngOnInit() {
    this.multas = this.multasService.getMultas();
  }
}
