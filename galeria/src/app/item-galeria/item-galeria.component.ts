import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import {ItemCarritoCompras} from '../interfaces/item-carrito-compras';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit,OnDestroy {

  static title= 'Licoreria';
  
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
  constructor(private readonly _carritoService:CarritoService) { }

  
  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
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
  
  ngOnInit() {
    console.log("'Empezo'");
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(){
    console.log("'Termino'");
  }

  agregarCarrito(valorCarrito:string){
    //this._carritoService.carritoCompras.push(itemCarrito);
    const itemCarrito:ItemCarritoCompras = {
      valor: valorCarrito,
      nombreTienda: this.titulo,
      fechaCompra:new Date()
    };
    
    const respuestaCarrito = this._carritoService
          .agregarCarritoDeCompras(itemCarrito);
    console.log(respuestaCarrito);
  
  }
}


//Cuando solo vamos a tipar usamos solo las interfaces.
/*
class CarritoCompraClass implements CarritoComprasInterface{
  valor:string;
  nombreTienda:string;
  //fechaCompra?:Date
  //con el ? decimos que es un campo opcional
}*/
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
/*
Problema:
Cuando agregre un item al arreglo, debo de guardar su cantidad.
en el item nos hace falta, la cantidad.

id -> Valor
1) Verificar si ya existe ese "item".
  Existe? -> buscar si existe ese valor
  1.1 Existe:
   Aumentamos contador
  1.2 No existe:
    Creamos el contador y lo seteamos en 1
    -> input () -> output()
    c1 -> 
    c2 -
    s1 - L1
    s2 - L1
*/