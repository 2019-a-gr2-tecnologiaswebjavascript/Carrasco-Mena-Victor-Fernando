import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css']
})
export class IconoComponent implements OnInit {

  @Input() nombreIcono:string;
  @Input() url:string;

  arregloUrls = [
    "assets/icono1.svg",
    "assets/icono2.svg",
    "assets/icono3.svg"
  ]
  constructor() { }

  ngOnInit() {
  }

  mostrarImagen(){

  }

}
