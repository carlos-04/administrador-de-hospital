import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {
  public titulo: string = "";
  public tituloSubs$: Subscription;


  constructor(private _router: Router) {
    this.tituloSubs$ = this.getDataRoutes()
      //destructurando lo que me trae la data
      .subscribe(({ titulo }) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${titulo}`;
      })
  }
  getDataRoutes() {
    //extrayendo la data de mi breadcrumbs
    return this._router.events.pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );

  }
  ngOnDestroy() {
    this.tituloSubs$.unsubscribe();
  }
}
