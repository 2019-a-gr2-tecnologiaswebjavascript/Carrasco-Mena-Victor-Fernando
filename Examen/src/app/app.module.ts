import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { EstaLogeadoService } from './servicios/guards/esta-logeado.service';
import { HomeComponent } from './rutas/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EstaLogeadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
