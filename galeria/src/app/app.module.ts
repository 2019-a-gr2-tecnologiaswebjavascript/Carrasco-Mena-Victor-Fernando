import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostarCarritoComponent } from './mostar-carrito/mostar-carrito.component';

@NgModule({
  declarations: [ // Componentes
    AppComponent,
    ItemGaleriaComponent,
    MostarCarritoComponent
  ],
  imports: [ // Modulos
    BrowserModule // Directiva
  ],
  providers: [ //servicios
    CarritoService
  ],
  bootstrap: [AppComponent] //Componete principal, 
})
export class AppModule { }
