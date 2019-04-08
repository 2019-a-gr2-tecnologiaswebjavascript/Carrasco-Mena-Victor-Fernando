import { Component, OnInit, Input } from '@angular/core';
import { SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core/src/change_detection/change_detector_ref';

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
  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
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