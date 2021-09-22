import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.scss'],
})
export class CorreosComponent implements OnInit {

  correos: any[] = [{
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
    leido: true,
    fechaRecibido: "2019-10-01T15:43:40.394Z"
  },
  {
    titulo: "holaaaaaaaa",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: true,
    fechaRecibido: "2019-12-01T15:43:40.394Z"
  }
]


//1. Agregar filtrado de correos basado en 
filtroCorreo(filtrarPor:string): any[]{
  filtrarPor = filtrarPor.toLowerCase();
  return this.correos.filter((any:any)=>
  any.titulo.toLowerCase().includes(filtrarPor))
}
private _filtrarCorreos: string = '';

correosFiltrados: any[]=[]

get filtrarCorreos(): string {
  return this._filtrarCorreos;
}
set filtrarCorreos(value: string){
  this._filtrarCorreos = value;
  console.log(value);
  this.correosFiltrados = this.filtroCorreo(value);
}



//2. Ordenar basado en fecha



  constructor() { }

  ngOnInit() {}

}
