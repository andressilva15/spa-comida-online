import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comida-tarjeta',
  templateUrl: './comida-tarjeta.component.html',
  styleUrls: ['./comida-tarjeta.component.css']
})
export class ComidaTarjetaComponent implements OnInit {

  @Input() comida: any = {};
  @Input() index: number;

  @Output() comidaSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.comidaSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verComida() {
    // console.log(  this.index );
    this.router.navigate( ['/comida', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
