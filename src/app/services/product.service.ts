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

export class ProductService {

  private products = new BehaviorSubject<Product[]>([

    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', imageUrl: 'assets/Mirage Logo Concept @ouhcosmo.jpg' },

    { id: 2, name: 'Smartphone', price: 700, category: 'Electronics', imageUrl: 'assets/descarga (9).jpg' },

    { id: 3, name: 'Headphones', price: 150, category: 'Accessories', imageUrl: 'assets/descarga (9).jpg' },

    // Agrega más productos según sea necesario

  ]);

 

  getProducts() {

    return this.products.asObservable();

  }

}
