import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tienda-front-end';

  constructor(private readonly _httpClient:HttpClient){

  }

  ngOnInit(){
    const url = environment.url + "/usuario" ;
    //http://localhost:1337

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

