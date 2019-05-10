import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activatedRoute.params;
    // el signo de dolar significa q ess variable
    // es un observable
    const parametrosConsultas$ = this._activatedRoute.queryParams;
    // parametros de ruta y de consukta no necesitan las funciones
    // Catch y Complete poruqe son especiales
    parametrosConsultas$.subscribe(
      (parametrosConsulta)=>{
        console.log('Parametros de consulta:',parametrosConsulta);
      }
    )
    parametros$.subscribe(
      (parametros)=>{ //ok
        console.log('Parametros:', parametros)
      },
      (error)=>{ // :(
        console.log('Error:',error);
      },
      ()=>{ //Completado //Opcional
        console.log('Completo');
      }
    )
  }

}
