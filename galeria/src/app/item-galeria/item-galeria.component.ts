import { Component, OnInit, Input, Output } from '@angular/core';
import { SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core/src/change_detection/change_detector_ref';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title= 'Licoreria';
  
  @Input()
  textoBoton;
  
  @Input()
  nombreItem;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter();

  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter();

  url= "https://img.icons8.com/ios/50/000000/beer-bottle-filled.png"

  notas = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur')
  }

  cambiarImagen(){
    const cervezaMarca="https://img.icons8.com/color/48/000000/beer-bottle.png";
    const cerveza="https://img.icons8.com/ios/50/000000/beer-bottle-filled.png";
    // var url2="https://img.icons8.com/color/48/000000/beer-bottle.png" Nunca definimos con esto
    // let url3="https://img.icons8.com/color/48/000000/beer-bottle.png"// en caso de que nos sirva cons
    // let si permite reasignacion
    if(this.url=== cervezaMarca){
      this.url = cerveza;
      this.cambioChela.emit(true);
    }else{
      this.url =cervezaMarca;
      this.cambioCerveza.emit(true);
    }
    //this.url = url1;
  }

}
/*
@DecoratorsClase() // - FUNCION
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Fernando';

  constructor(@DecoratorsConstructor()nombre){

  }
  metodoPublico(){

  }
  private metodoPrivado(){

  }
  protected metodoProtected(){

  }
}*/