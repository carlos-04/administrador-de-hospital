import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotpagesfoundComponent } from './notpagesfound/notpagesfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotpagesfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
