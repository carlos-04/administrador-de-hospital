import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent implements OnInit {
 

  @Input() title:string = "Sin titulo";

  @Input() information: number[] = [150, 200, 250];

  ngOnInit(): void {
    console.log(this.information);
  }
  
  // este es el que define el tipo de grafico
  public doughnutChartType: ChartType = 'doughnut';
  // el que contiene las partes del grafico
  @Input('dataLabels')   doughnutChartLabels: string[] =['Aguilas', 'Liscey', 'Escogido'];
  //el que le pasa la data a los graficos
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.information,
        backgroundColor: ['#6857e6', '#009fee', '#f02059']
      },
    ]
  };


}
