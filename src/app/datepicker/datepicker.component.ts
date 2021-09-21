import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CorreosComponent } from '../correos/correos.component';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  filtroFecha: string = '2019-10-01T15:43:40.394-00:00';
  @Output() enviar = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  envio(){
    this.enviar.emit(this.filtroFecha);
  }
}
