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

  arregloAnuncios = [
    {
      titulo:"Casa de lujo en el Lago",
      urlImagen:"assets/anuncio1.jpg",
      descripcion:"Casas en el lago con excelente vista, acabados de lujo a un excelente precio.",
      precio:3000000,
    },
    {
      titulo:"Casa terminados de lujo",
      urlImagen:"assets/anuncio2.jpg",
      descripcion:"Casa con diseño moderno, así como tecnología inteligente y amoblada",
      precio:2000000,
    },
    {
      titulo:"Casa con alberca",
      urlImagen:"assets/anuncio3.jpg",
      descripcion:"Casa con alberca y acabados de lujo, en la ciudad, excelente oportunidad.",
      precio:4000000,
    }
  ]
}

