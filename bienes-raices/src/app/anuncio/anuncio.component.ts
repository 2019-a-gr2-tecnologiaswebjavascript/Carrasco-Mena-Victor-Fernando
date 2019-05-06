import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  @Input() titulo:string;
  @Input() url:string;
  @Input() descripcion:string;
  @Input() precio:number;

  constructor() { }

  ngOnInit() {
  }

}
