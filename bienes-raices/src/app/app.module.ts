import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IconoComponent } from './icono/icono.component';
import { AnuncioComponent } from './anuncio/anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IconoComponent,
    AnuncioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
