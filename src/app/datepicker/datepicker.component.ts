import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  selected: string;
  @Output()
  fecha: EventEmitter<string> = new EventEmitter<string>();
  dato(){
    this.selected = new Date(this.selected).toISOString();
    this.fecha.emit(this.selected);
  }
  constructor() { }

  ngOnInit() {}

}
