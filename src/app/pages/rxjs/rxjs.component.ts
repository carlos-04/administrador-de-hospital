import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, retry, Subscription, interval, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit {
  public intervalSub$!: Subscription;
  constructor() {
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Sub: ', valor),
    //   error => console.warn("Error en el intervalo", error),
    //   () => console.info("Se completo correctamente")
    // )
   this.intervalSub$ = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnInit(): void {
  }
  retornaIntervalo(): Observable<number> {
    return interval(100)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0 ? true : false)),
      )
  }
  retornaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error("i llego al valor 2");
        }
      }, 1000)
    });

    return obs$;
  }
  ngOnDestroy() {
    this.intervalSub$.unsubscribe();
  }
}
