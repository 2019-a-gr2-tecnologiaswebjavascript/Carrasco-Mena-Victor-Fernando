import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado: boolean = false;
  constructor() { }

  login(password:string,usuario:string){
    if(password === '1234' && usuario === 'adrian'){
      this.estaLogeado = true;
      return true;
    }else{
      return false;
    }
  }

  logout(){
    this.estaLogeado = false;
  }
}
