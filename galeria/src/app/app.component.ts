import { Component, Input } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  color = 'rojo';
  estaMostrando = false;
  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres"),
  ];

  arregloFloresJs = [
    {
      tiulo:"Don Pepito",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      notas:[
        'Papitas',
        'Empanadas',
      ]
      // dato:1,
      // dato1:1.1,
      // dato3:"asdasd",
      // dato4:false,
    },
    {
      tiulo:"Don Jose",
      nombre:"Carnita",
      descripcion:"Gorditas",
      notas:[
        'Motes',
        'Fritada',
      ]
    },
    {
      tiulo:"Donia Maria",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:[
        'Papitas',
        'Empanadas',
      ]
    },
  ];

  constructor(private readonly _carritoService:CarritoService){

  }

  cambioChela(evento:boolean){
    //logica para hacerle verde
    console.log('Llego a chela: ',evento);
    this.color = 'verde';
    
  }

  cambioCerveza(evento:boolean){
    //logica para hacerle amarillo
    console.log('Llego a cerveza: ',evento);
    this.color = 'amarillo'
  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }
    
  
}



class Flor{
  constructor(
    public nombre:string,//agregando el public se convierte automaticamente en un atributo de la clase
    public descripcion:string){
  }
}
