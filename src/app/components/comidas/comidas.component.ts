import { Component, OnInit } from '@angular/core';
import { ComidasService, Comida } from '../../servicios/comidas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html'
})
export class ComidasComponent implements OnInit {

  comidas:Comida[] = []; // creo una variable de arreglos de comidas

  // el constructor se ejecuta antes que el ngOnInit
  constructor( private _comidasService:ComidasService,
               private router:Router
                ) {
    //console.log("constructor");
  }
  // el ngOnInit nos permite renderizar un componente cuando la pagina ya esta actualizada
  ngOnInit() {
    this.comidas = this._comidasService.getComidas();// utulizo el servicio
    //console.log( this.heroes );
  }

  verComida( idx:number ){
    this.router.navigate( ['/comida',idx] );
  }

}
