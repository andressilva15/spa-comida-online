import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ComidasService } from '../../servicios/comidas.service';
@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html'
})

@Component({
  selector: 'app-comida',
  templateUrl: './Comida.component.html'
})
export class ComidaComponent {

  comida:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _comidasService: ComidasService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.comida = this._comidasService.getComida( params['id'] );
        // console.log(this.heroe);
    });

  }

}
