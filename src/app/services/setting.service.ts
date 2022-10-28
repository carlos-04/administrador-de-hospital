import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    //Aqui almaceno la ruta que le deseo agregar al link de los colores que se encuentra el el index
    const url = `./assets/css/colors/${theme}.css`;
    //Aqui estoy reemplazando el atributo del href por el mio
    localStorage.setItem('theme', url);
    this.linkTheme?.setAttribute('href', url);
  }


  checkCurrentTheme() {
     const links = document.querySelectorAll('.selector');
    //en este forEach estoy recorriendo todos los elementos que contienen la clase selector
    links.forEach(elem => {
      //Aqui le estoy removiendo la clase working si uno de los elementos la contiene
      elem.classList.remove('working');
      //aqui estoy obteniendo el atributo que contiene data-theme
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      //aqui estoy obteniendo el ruta que contiene ese atributo
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    })
  }
}
