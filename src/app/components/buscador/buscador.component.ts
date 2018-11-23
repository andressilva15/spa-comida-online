
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComidasService } from '../../servicios/comidas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  comidas:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _comidasService: ComidasService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.comidas = this._comidasService.buscarComidas( params['termino'] );
      console.log( this.comidas );
    });

  }

}
