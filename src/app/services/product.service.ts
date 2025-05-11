import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
// Importar BehaviorSubject para poder usar el servicio como un observable

interface Product {

  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;

}

 
// Se utiliza el decorador @Injectable para indicar que esta clase puede ser inyectada en otros componentes o servicios

@Injectable({
  providedIn: 'root'
})

export class ProfesionalService {
  private products = new BehaviorSubject<Product[]>([ // Lista de productos
    // Se utiliza BehaviorSubject para crear un observable que emitirá el valor inicial de la lista de productos
    // y permitirá a otros componentes suscribirse a los cambios en la lista de productos
    // Se define una interfaz Product que representa la estructura de un producto
    // Cada producto tiene un id, nombre, precio, categoría y URL de imagen
    // Se crea una lista de productos inicial con tres productos de ejemplo
    // Cada producto tiene un id, nombre, precio, categoría y URL de imagen
    // Se utiliza el método asObservable() para convertir el BehaviorSubject en un observable
    // que puede ser utilizado por otros componentes para suscribirse a los cambios en la lista de productos
    
    { id: 1, name: 'Cámara Profesional 1', price: 1000, category: 'Electronics', imageUrl: 'assets/Mirage Logo Concept @ouhcosmo.jpg' },

    { id: 2, name: 'Cámara Profesional 2', price: 700, category: 'Electronics', imageUrl: 'descarga (9).jpg' },

    { id: 3, name: 'Cámara Profesional 3', price: 150, category: 'Electronics', imageUrl: 'assets/descarga (9).jpg' },

  ]);

 

  getProducts() { // Método para obtener los productos y llevarlos a product-list.component.ts
    return this.products.asObservable();

  }

}

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

