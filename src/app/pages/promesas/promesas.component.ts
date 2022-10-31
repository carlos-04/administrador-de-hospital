import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   

    //suscribiendome a mi promesa.
    this.getUsuarios().then(resp => {
      console.log(resp);
    });
    console.log("fin del init");
  }

  basicPromises() {
    //si todo funciono bien ejecuto el resolve 
    //si todo sale mal el reject
    const promesas = new Promise((resolve, reject) => {
      if (false) {
        resolve('Klok la promesa funciono');
      } else {
        reject('bummm sali mal, ocurrio un error');
      }
    });
    promesas.then(resp => {
      console.log(resp);
    }).catch(error => console.log(error))

  }
  getUsuarios() {
    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    });

    return promesa;
  }
}
