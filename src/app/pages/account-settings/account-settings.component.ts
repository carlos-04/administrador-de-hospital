import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',

})
export class AccountSettingsComponent implements OnInit {
  //seleccionando el id dellink del tema que esta en el index.html
  linkTheme = document.querySelector('#theme');
  links!: NodeListOf<Element>;
  constructor(private _setting: SettingService) { }

  ngOnInit(): void {
 
    this._setting.checkCurrentTheme();
  }

  changeColor(theme: string) {
    this._setting.changeTheme(theme);
    this._setting.checkCurrentTheme();
  }




}
