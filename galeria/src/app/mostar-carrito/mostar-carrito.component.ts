import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';

@Component({
  selector: 'app-mostar-carrito',
  templateUrl: './mostar-carrito.component.html',
  styleUrls: ['./mostar-carrito.component.css']
})
export class MostarCarritoComponent implements OnInit {

  constructor(private readonly _carritoService: CarritoService) { }

  ngOnInit() {
    
  }

}
