import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bienes-raices';
  caracteristica ="Seguridad";
  url = "assets/icono1.svg";

  arregloIconos = [
    {
      nombre:"Seguridad",
      urlImagen:"assets/icono1.svg"
    },
    {
      nombre:"El mejor precio",
      urlImagen:"assets/icono2.svg"
    },
    {
      nombre:"A tiempo",
      urlImagen:"assets/icono3.svg"
    }
  ]

}

