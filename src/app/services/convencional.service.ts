import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface Product {

  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;

}


@Injectable({
  providedIn: 'root'
})


export class ConvencionalService {

  private products = new BehaviorSubject<Product[]>([ // Lista de productos

    { id: 1, name: 'Cámara Convencional 1', price: 2000, category: 'Electronics', imageUrl: 'assets/Mirage Logo Concept @ouhcosmo.jpg' },

    { id: 2, name: 'Cámara Convencional 2', price: 850, category: 'Electronics', imageUrl: 'descarga (9).jpg' },

    { id: 3, name: 'Cámara Convencional 3', price: 300, category: 'Electronics', imageUrl: 'assets/descarga (9).jpg' },

  ]);

 

  getProducts() { // Método para obtener los productos y llevarlos a product-list.component.ts
    return this.products.asObservable();

  }

}