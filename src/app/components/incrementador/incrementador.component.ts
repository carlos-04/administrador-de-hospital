import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 40;
  @Input() btnClass: string = "btn-primary";
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }


  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
    if (this.progreso >= 100) {
      this.valorSalida.emit(100);
      this.progreso = 100;
    }

    if (this.progreso <= 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;

    }
  }

  onChange(newValue: number) {

    if (newValue >= 100) {

      newValue = 100;

    } else if (newValue <= 0) {

      newValue = 0;
    }
    this.valorSalida.emit(newValue);
  }

}


