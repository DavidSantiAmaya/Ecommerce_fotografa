import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-lp-convencional',
  imports: [ProductListComponent],// Llamar a los componentes que se necesiten
  templateUrl: './lp-convencional.component.html',
  styleUrl: './lp-convencional.component.css'
})
export class LpConvencionalComponent {

}
