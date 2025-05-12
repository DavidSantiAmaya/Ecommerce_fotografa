import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
// Importar BehaviorSubject para poder usar el servicio como un observable

interface Product {

  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  descrip: string;
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
    
    { id: 1, name: 'Canon EOS R5', price: 15000000, category: 'Electronics', imageUrl: 'Pro1.jpeg', descrip: 'Cámara mirrorless profesional con sensor full-frame de 45 MP, ráfaga de 20 fps, enfoque automático avanzado y video en 8K. Ideal para fotografía de alta calidad y producción audiovisual exigente.'},

    { id: 2, name: 'Nikon Z9', price: 18000000, category: 'Electronics', imageUrl: 'Pro2.jpeg', descrip: 'Cámara mirrorless tope de gama con sensor full-frame de 45.7 MP, ráfaga de hasta 120 fps, enfoque automático de alto nivel y grabación en 8K. Diseñada para profesionales en fotografía deportiva, naturaleza y video.'},

    { id: 3, name: 'Sony Alpha 1', price: 27000000, category: 'Electronics', imageUrl: 'Pro3.jpeg', descrip: 'Cámara mirrorless profesional con sensor full-frame de 50.1 MP, ráfaga de 30 fps, enfoque ultra rápido y grabación en 8K. Combina alta resolución, velocidad y video de calidad cinematográfica en un solo cuerpo.' },

  ]);

 

  getProducts() { // Método para obtener los productos y llevarlos a product-list.component.ts
    return this.products.asObservable();

  }

}



