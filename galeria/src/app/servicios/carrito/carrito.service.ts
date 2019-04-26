import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from 'src/app/interfaces/item-carrito-compras';

@Injectable()
export class CarritoService{
    carritoCompras:ItemCarritoCompras[] = [];

    agregarCarritoDeCompras(
        itemCarrito:ItemCarritoCompras
        ):ItemCarritoCompras[]{
        const identificador = itemCarrito.valor;
        const nombreTienda = itemCarrito.nombreTienda;
        let indiceItem = -1
        const existeElItem = this.carritoCompras
            .some(
                (item:ItemCarritoCompras,indice)=>{
                    if(item.valor == identificador){
                        indiceItem = indice;
                        return true;
                    }else{
                        return false;
                    }
                }
            )
        
        const existeLaTienda = this.carritoCompras
            .some(
                (item:ItemCarritoCompras,indice)=>{
                    if(item.nombreTienda == identificador){
                        indiceItem = indice;
                        return true;
                    }else{
                        return false;
                    }
                }
            )

        if(existeElItem && existeLaTienda){
            this.anadirAlContador(indiceItem);            
        }else{
            this.anadirAlCarrito(itemCarrito);
        }

        console.log("Se anadio al carrito", itemCarrito);
        return this.carritoCompras;
    }


    private anadirAlContador(indice:number){
        this.carritoCompras[indice].cantidad++;
    }

    private anadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }
}
/*
const respuesta = [1,2,3].forEach(// devuelve undefined
    (valor:number)=>{
    console.log('Valor:',valor);
    if(valor==1){
        console.log('Te encontre 1!!');
    }
});
console.log(respuesta); // undefined -> void

const respuestaFind = [1,2,34].find(// devuelve boolean
    (valor:number):boolean =>{
        return valor==3 // Expresion! a<b b==c
});

console.log(respuestaFind);// valor encontrado

const respuestaSome = [1,2,3].some(// devuelve boolean
    (valor:number):boolean =>{
        return valor==3 // Hay algun 3? operador OR
});

console.log(respuestaSome);// valor encontrado

const respuestaEvery = [1,2,3].every(// devuelve boolean
    (valor:number):boolean =>{
        return valor > 0 // Todos son  3? operador AND
});

console.log(respuestaEvery);// valor*/