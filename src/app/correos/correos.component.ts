import { Component, OnInit } from '@angular/core';
import { Correo } from './correos';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.scss'],
})
export class CorreosComponent implements OnInit {

  private _filtrarCorreos: string = '';
  correosFiltrados: Correo[] = [];

  correos: Correo[] = [{
    titulo: "hola, mundo",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: false,
    fechaRecibido: "2019-11-01T15:43:40.394Z"
  },
  {
    titulo: "hello, world",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: false,
    fechaRecibido: "2019-10-01T15:43:40.394Z"
  },
  {
    titulo: "holaaaaaaaa",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: false,
    fechaRecibido: "2019-12-01T15:43:40.394Z"
  }
]


//1. Agregar filtrado de correos basado en 
filtroCorreos(filtrarPor: string): Correo[]{
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.correos.filter((correo: Correo) =>correo.fechaRecibido.toLocaleLowerCase().includes(filtrarPor));
}

get filtrarCorreos(): string{
  return this._filtrarCorreos;
}

set filtrarCorreos(valor: string){
  this._filtrarCorreos = valor;
  console.log(valor);

  this.correosFiltrados = this.filtroCorreos(valor);

  console.log(this.correosFiltrados);
}

buscando(fecha : string){
  alert("Buscando la fecha : " +(fecha).substring(10,-1));
  this.filtrarCorreos=(fecha).substring(10,-1);
}

//2. Ordenar basado en fecha
ascend(){
  this.correosFiltrados.sort((a, b) => new Date(b.fechaRecibido).getTime() - new Date(a.fechaRecibido).getTime());
}
descen(){
  this.correosFiltrados.sort((b, a) => new Date(b.fechaRecibido).getTime() - new Date(a.fechaRecibido).getTime());
}

  constructor() { }

  ngOnInit(): void {
    this.filtrarCorreos = '';
  }

}

