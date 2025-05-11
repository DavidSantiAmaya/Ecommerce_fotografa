import { Component } from '@angular/core';
import { ConvencionalListComponent } from '../convencional-list/convencional-list.component';
@Component({
  selector: 'app-lp-convencional',
  imports: [ConvencionalListComponent],// Llamar a los componentes que se necesiten
  templateUrl: './lp-convencional.component.html',
  styleUrl: './lp-convencional.component.css'
})
export class LpConvencionalComponent {

}
