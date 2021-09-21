import { Component, OnInit } from '@angular/core';
import { Correo } from './correos';
@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.scss'],
})
export class CorreosComponent implements OnInit {

  private _filtrarcorreos : string = '';
  correosFiltrados: Correo[]=[];

  correos: Correo[] = [{
    titulo: "hola, mundo",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Nav is a standalone component for loading arbitrary components and pushing new components on to the stack.",
    leido: false,
    fechaRecibido: "2019-11-01T15:43:40.394Z"
  },
  {
    titulo: "hello, world",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Radios should be used inside of an ion-radio-group. Pressing on a radio will check it. They can also be checked programmatically by setting the value property of the parent ion-radio-group to the value of the radio.",
    leido: false,
    fechaRecibido: "2019-10-01T15:43:40.394Z"
  },
  {
    titulo: "Correo A",
    remitente: "Alumno1.des@uanl.edu.mx",
    contenido: "The Menu component is a navigation drawer that slides in from the side of the current view. By default, it slides in from the left, but the side can be overridden. The menu will be displayed differently based on the mode, however the display type can be changed to any of the available menu types.",
    leido: false,
    fechaRecibido: "2020-01-01T15:43:40.394Z"
  },
  {
    titulo: "Correo D",
    remitente: "Alumno2.des@uanl.edu.mx",
    contenido: "Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.",
    leido: false,
    fechaRecibido: "2020-02-01T15:43:40.394Z"
  },
  {
    titulo: "Correo Z",
    remitente: "Alumno5.des@uanl.edu.mx",
    contenido: "The grid is a powerful mobile-first flexbox system for building custom layouts.Lists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items.",
    leido: false,
    fechaRecibido: "2019-10-01T15:43:40.394Z"
  },
  {
    titulo: "Correo M",
    remitente: "Alumno6.des@uanl.edu.mx",
    contenido: "The grid is a powerful mobile-first flexbox system for building custom layouts.",
    leido: false,
    fechaRecibido: "2019-12-02T15:43:40.394Z"
  }
]


//1. Agregar filtrado de correos basado en 
filtroCorreos(filtrarPor: string): Correo[]{
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.correos.filter((fecha: Correo)=>
  fecha.fechaRecibido.toLocaleLowerCase().includes(filtrarPor));
}

get filtrarcorreos(): string{
  return this._filtrarcorreos;
}

set filtrarcorreos(value : string){
  this._filtrarcorreos = value;
  console.log(value);
  this.correosFiltrados = this.filtroCorreos(value);
 
}

buscando(fecha : string){
  //alert((fecha).substring(10,-1));
  this.filtrarcorreos=(fecha).substring(10,-1);
}
//2. Ordenar basado en fecha
asc(){
  this.correosFiltrados.sort((a, b) => new Date(b.fechaRecibido).getTime() - new Date(a.fechaRecibido).getTime());
}

desc(){
  this.correosFiltrados.sort((b, a) => new Date(b.fechaRecibido).getTime() - new Date(a.fechaRecibido).getTime());
}

  constructor() { }

  ngOnInit() {
    this.filtrarcorreos='';
  }

}
