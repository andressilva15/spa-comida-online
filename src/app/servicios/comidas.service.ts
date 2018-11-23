import { Injectable } from '@angular/core';


@Injectable()
export class ComidasService {

  // propiedad privada para que no puede ser accesada fuera de la  claseo servicio
  private comidas:Comida[] = [
    {
    nombre: "Carne Asada",
    descripcion: "Los mejores cortes de carne asada, carnes muy tierna se prepara a gusto del consumidor.",
    img: "assets/img/churrasco.png"

  },
  {
    nombre: "Empanadas",
    descripcion: "Toda la variedad de empanadas que te imagines dulces, saladas.",
    img: "assets/img/empanadas.png"

  },
  {
    nombre: "Hamburguesas",
    descripcion: "Hamburguesas para todos los gustos con distinta variedad de panes y con todo aquello que la quieras saborizar.",
    img: "assets/img/hambur.png"

  },
  {
    nombre: "Locro",
    descripcion: "Exisito locro tradicional con verduras frescas de nuestra huerta.",
    img: "assets/img/locro.png"

  },
  {
    nombre: "Milanesas",
    descripcion: "Milanesas de pollo, de carne, de soja y otras variedades.",
    img: "assets/img/milanesa.png"

  },
  {
    nombre: "Pastas",
    descripcion: "Distinta variedad de pastas para todos los gustos y harinas para todas las personas.",
    img: "assets/img/pastas.png"

  },
  {
    nombre: "Pizzas",
    descripcion: "Tenemos toda la variedad de pizzas y con distintos tipos de harinas, una sensación inolvidable.",
    img: "assets/img/pepperoni-pizza.png"

  },
  {
    nombre: "Picadas",
    descripcion: "Para una entrada o para una comida ligera tenemos las mejores picadas de la argentina.",
    img: "assets/img/picada.png"

  },

  {
    nombre: "Pollo",
    descripcion: "Cocinamos el pollo en distintas formas asado, a la cacerola.",
    img: "assets/img/pollo.png"

  },

  {
    nombre: "Tacos",
    descripcion: "Tenemos los mejores tacos de la Argentina cocinado por nuestros chefs.",
    img: "assets/img/tacos.png"

  },
  {
    nombre: "Wuhan",
    descripcion: "Tenemos el mejor chef de comida exotica, el cual realiza el plato que le pidas. ",
    img: "assets/img/wuhan.png"
  },


  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }

  // Creamos un metodo para obtener los personajes Star
  getComidas():Comida[]{
    return this.comidas;
  }

  getComida( idx: string ){
    return this.comidas[idx]; // .this: hace referencia los heroes
  }

  buscarComidas( termino:string ):Comida[]{

    let comidasArr:Comida[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.comidas.length; i ++ ){

      let comida = this.comidas[i];

      let nombre = comida.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        comida.idx = i;
        comidasArr.push( comida )
      }

    }

    return comidasArr;

  }


}

// Creamos una interfaz para que no se puedan insertar ningun heroe que no tenga las caracteristicas del JSON
export interface Comida{
  nombre: string;
  descripcion: string;
  img: string;
  idx?: number;
};
