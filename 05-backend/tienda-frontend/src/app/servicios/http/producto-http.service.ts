import { HttpSailsPrincipal } from './http-sails-principal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { Producto } from '../../dto/Producto';

@Injectable()
export class ProductoHttpService extends HttpSailsPrincipal<Producto>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Producto');
    }

    cargarArchivo(archivo:File, idProducto:number){
        // Formulario virtual
        const formulario:FormData = new FormData();
        formulario.append('imagen',archivo,archivo.name);
        formulario.append('nombre','Fernando');
        formulario.append('apellido','Carrasco');
        formulario.append('sueldo','126');
        // cabeceras que se envian mediante el Angular
        const cabeceras:HttpHeaders =  new HttpHeaders();
        cabeceras.append('Content-type','multipart/form-data');
        cabeceras.append('Accept','aplication/json');

        const opciones = { headers:cabeceras};
        const url = `${this.url}/cargarArchivo/${idProducto}`

        return this.httpClient.post(url,formulario,opciones);
    }
}