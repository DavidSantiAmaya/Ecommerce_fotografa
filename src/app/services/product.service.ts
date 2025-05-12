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

    { id: 3, name: 'Sony Alpha 1', price: 27000000, category: 'Electronics', imageUrl: 'Pro3.jpeg', descrip: 'Cámara mirrorless profesional con sensor full-frame de 50.1 MP, ráfaga de 30 fps, enfoque ultra rápido y grabación en 8K. Combina alta resolución, velocidad y video de calidad cinematográfica en un solo cuerpo.', },

    { id: 4, name: 'Fujifilm GFX100 II', price: 33000000, category: 'Electronics', imageUrl: 'Pro4.jpeg', descrip: 'Cámara de formato medio con sensor de 102 MP, ideal para fotografía de estudio, moda y paisajes. Ofrece una calidad de imagen excepcional, amplio rango dinámico y grabación de video en 8K, combinando resolución extrema con funciones avanzadas.' },

    { id: 5, name: 'Panasonic Lumix GH5', price: 13000000, category: 'Electronics', imageUrl: 'Pro5.jpeg', descrip: 'Cámara mirrorless Micro 4/3 pensada para creadores de contenido, con video en 4K 60fps, estabilización en el cuerpo, y enfoque rápido. Muy popular entre videógrafos por su versatilidad y rendimiento profesional en grabación.' },

    { id: 6, name: 'Leica SL3', price: 28000000, category: 'Electronics', imageUrl: 'Pro6.jpeg', descrip: 'Cámara mirrorless de formato completo con sensor BSI CMOS de 60 MP, rango dinámico de hasta 15 pasos y estabilización de imagen en 5 ejes. Ofrece grabación de video en 8K, enfoque automático híbrido y un diseño robusto con certificación IP54 para resistencia al polvo y salpicaduras.' },

    { id: 7, name: 'Canon EOS - 1D', price: 33000000, category: 'Electronics', imageUrl: 'Pro7.jpeg', descrip: 'Cámara réflex profesional con sensor full-frame de 20.1 MP, ráfaga de hasta 20 fps, enfoque automático avanzado y excelente rendimiento en condiciones de poca luz. Diseñada para fotografía deportiva, de acción y reportaje, con cuerpo robusto y duradero.' },

    { id: 8, name: 'Sony FX3', price: 18000000, category: 'Electronics', imageUrl: 'Pro8.jpeg', descrip: 'Cámara de cine compacta con sensor full-frame, video en 4K hasta 120 fps, excelente rendimiento en baja luz y enfoque automático preciso. Ideal para cineastas, videógrafos y creadores de contenido que buscan calidad profesional en un cuerpo portátil.' },

    { id: 9, name: 'Nikon D5', price: 31000000, category: 'Electronics', imageUrl: 'Pro9.jpeg', descrip: 'Cámara réflex profesional con sensor full-frame de 20.8 MP, ráfaga de hasta 12 fps, enfoque automático de 153 puntos y excelente rendimiento en condiciones de poca luz. Ideal para fotografía deportiva, de acción y prensa.' },

    { id: 10, name: 'Hasselblad X2D 100C', price: 34000000, category: 'Electronics', imageUrl: 'Pro10.jpeg', descrip: 'Cámara mirrorless de formato medio con sensor de 100 MP, estabilización de 5 ejes, y enfoque automático híbrido. Ideal para fotografía profesional de alta resolución, con almacenamiento interno de 1 TB y un diseño robusto.' },
  ]);

 

  getProducts() { // Método para obtener los productos y llevarlos a product-list.component.ts
    return this.products.asObservable();

  }

}



