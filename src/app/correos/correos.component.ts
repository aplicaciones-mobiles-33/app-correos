import { Component, OnInit } from '@angular/core';
import { Emails } from './correos';


@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.scss'],
})
export class CorreosComponent implements OnInit {

  correos: Emails[] = [{
    titulo: "hola, mundo",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: false,
    fechaRecibido: "2019-11-01T15:43:40.394-00:00"
  },
  {
    titulo: "hello, world",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: false,
    fechaRecibido: "2019-10-01T15:43:40.394-00:00"
  },
  {
    titulo: "holaaaaaaaa",
    remitente: "aracely.des@uanl.edu.mx",
    contenido: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    leido: false,
    fechaRecibido: "2019-12-01T15:43:40.394-00:00"
  }
]


//1. Agregar filtrado de correos basado en datepicker
fecha: string ='';

respuesta(entrega){
  this.fecha = entrega.toLocaleLowerCase();
  console.log(this.fecha);
  this.filtrarFecha();
}

correosFiltrados: Emails[] = [];

filtrarFecha() : Emails[]{
  this.correosFiltrados = this.correos.filter((correo: Emails) => correo.fechaRecibido.toLocaleLowerCase().includes(this.fecha));
  console.log(this.correosFiltrados);
  return this.correosFiltrados;
}


 
//2. Ordenar basado en fecha


  constructor() { }

  ngOnInit() {}

}
