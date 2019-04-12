import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres"),
  ];

  arregloFloresJs = [
    {
      nombre:"Papitas",
      descripcion:"A lo bestia",
      // dato:1,
      // dato1:1.1,
      // dato3:"asdasd",
      // dato4:false,
    },
    {
      nombre:"Carnita",
      descripcion:"Gorditas"
    },
    {
      nombre:"Chicas",
      descripcion:"Cheveres"
    },
  ];

  cambioChela(evento:boolean){
    //logica para hacerle verde
    console.log('Llego a chela: ',evento);
    
  }

  cambioCerveza(evento:boolean){
    //logica para hacerle amarillo
    console.log('Llego a cerveza: ',evento);
  }

  
    
  
}



class Flor{
  constructor(
    public nombre:string,//agregando el public se convierte automaticamente en un atributo de la clase
    public descripcion:string){
  }
}
