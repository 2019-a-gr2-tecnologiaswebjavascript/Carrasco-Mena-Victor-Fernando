import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__ } from '@angular/core/src/change_detection/change_detector_ref';
import { EventEmitter } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit,OnDestroy {

  title= 'Licoreria';
  
  @Input()
  titulo;
  
  @Input()
  textoBoton;
  
  @Input()
  nombreItem;

  @Input()
  notas;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter();

  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter();

  url= "https://img.icons8.com/ios/50/000000/beer-bottle-filled.png"

  // Dependency
  // Injection
  // Inyeccion de dependencias
  // SERVICIOS -> COMPARTIDOS en varios componetes o servicios
  constructor(private readonly _carritoService: CarritoService) { }

  ngOnInit() {
    console.log("'Empezo'");
    console.log(this._carritoService.carritoCompras);
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
  

  ngOnDestroy(){
    console.log("'Termino'");
  }

  agregarCarrito(valorCarrito){
    //this._carritoService.carritoCompras.push(itemCarrito);
    const itemCarrito = {
      valor:valorCarrito,
      nombreTienda: this.titulo
    };
    
    this._carritoService.carritoCompras
                        .splice(0,0,valorCarrito);
    console.log(this._carritoService.carritoCompras);
  
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

/*
Ciclo de vida del componente
Vivir
Morir

ngOninit -> OnInit -> Instancia

ngOnDistroy -> OnDestroy

*/
/*
- RUTA -> LOGIN/MODULOS/ETC
  - PAPA [] -> HIJO [] -> HIJA
    - HIJO [] -> NIETO ()->PAPA
      - NIETO -> ()->HIJO
    - HIJA
      - NIETA
  - TIO
    - PRIMO

*/

/*
# -> modulo
* -> Componente
- -> servicio

# ModuloPrincipal (AppModule)
  * ComponentePrincipal (AppComponent)


................................
# ModuloNotas (NotasModule)
  * TablaMostrarMateria  
    _ [] notasPorMateria
    _ [] nombreBoton
    _ [] iconoBoton
    _ () ejecutoAccion
  * listaMaterias  
    _ () seleccionoMateria

    [Javascript] -> () -> seleccionoJavascript
*/
