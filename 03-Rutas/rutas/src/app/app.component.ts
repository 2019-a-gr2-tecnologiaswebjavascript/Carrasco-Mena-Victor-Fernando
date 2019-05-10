import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rutas';

  rutaHome = ['/home','app'];//segmentos de URL
  rutaCreditos = ['/creditos','1',12.00];
}
