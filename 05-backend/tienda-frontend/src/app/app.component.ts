import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoHttpService } from './servicios/http/producto-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';

  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService: UsuarioHttpService,
              private readonly _productoHttpService: ProductoHttpService){

  }

  
  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
      .crear({
        nombre:"Fernando",
        apellido:"Carrasco",
        cedula:'1722295134',
        correo:'eadepto@hotmail.com',
        estaCasado: false,
        username:'hcfercho',
        sueldo: 120,
        tipoUsuario: 'normal'
      });

    usuarioCrear$
      .subscribe(
        (nuevoUsuario)=>{
          console.log(nuevoUsuario);
        },
        (error)=>{
          console.error(error);
        },
      );

      const productoCrear$ = this._productoHttpService
      .crear({
        nombre:"Fernando",
        codigo:"2478"
      });

    productoCrear$
      .subscribe(
        (nuevoProducto)=>{
          console.log(nuevoProducto);
        },
        (error)=>{
          console.error(error);
        },
      );


    const url = environment.url + "/usuario";
    
    // http://localhost:1337/Usuario

    const listaUsuarios$ = this._httpClient.get(url);

    listaUsuarios$
          .subscribe(
            (datos)=>{
              console.log(datos);
            },
            (error)=>{
              console.log(error);
            }
          )
  }



}