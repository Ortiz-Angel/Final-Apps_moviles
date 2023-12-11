import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultasService } from '../services/multas.service';
import { Multa } from '../models/multa.model';

@Component({
  selector: 'app-multa-detail',
  templateUrl: './multa-detail.page.html',
  styleUrls: ['./multa-detail.page.scss'],
})
export class MultaDetailPage implements OnInit {
  multa: Multa | undefined;

  constructor(
    private multasService: MultasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const codigo = params.get('codigo');

      // Comprobación para asegurarse de que 'codigo' no es null
      if (codigo !== null) {
        this.multa = this.multasService.getMultaDetalle(codigo);
      }
    });
  }
}

