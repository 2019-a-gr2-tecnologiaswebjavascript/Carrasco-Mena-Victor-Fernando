import { HttpSailsPrincipal } from './http-sails-principal';
import { Usuario } from '../../dto/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient, environment.url, '/Usuario');
    }
}

// 1) Buscar usuario nombre 'Adrian'
// http://localhost:1337/Usuario?nombre=Adrian

// 2) Buscar usuario nombre 'Adrian' y la cedula '1722295134'
// http://localhost:1337/Usuario?nombre=Adrian&cedula=1722295134

// 3) Traer los 3 primeros usuarios
// http://localhost:1337/Usuario?nombre=Adrian&cedula=1722295134

// 4) traer los 3 primeros usuarios despues de los 9 primeros usuarios
// http://localhost:1337/Usuario?nombre=Adrian&cedula=1722295134

// 5) Traer usuarios ordenados por nombre
// http://localhost:1337/Usario?limit=3


// 6) Traer usuario que contenga las letras 'vic'
// http://localhost:1337/Usuario?nombre={"nombre":{"contains":"vic"}}


// 7) Traer usuario que contenga sueldos menor a 3000
// http://localhost:1337/Usuario?nombre={"nombre":{"contains":"vic"}}