import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface Product {

  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  descrip: string;
}


@Injectable({
  providedIn: 'root'
})


export class ConvencionalService {

  private products = new BehaviorSubject<Product[]>([ // Lista de productos

    { id: 1, name: 'Sony ZV - 1 II', price: 3500000, category: 'Electronics', imageUrl: 'Con1.jpeg', descrip: 'Cámara compacta para vloggers con sensor de 1", zoom de 18-50 mm, grabación en 4K y enfoque automático con seguimiento en tiempo real. Ideal para contenido en video y selfies.' },

    { id: 2, name: 'Canon Powershot G7 X Mark III', price: 8000000, category: 'Electronics', imageUrl: 'Con2.jpeg', descrip: 'Cámara compacta con sensor de 20.1 MP tipo 1.0 y lente zoom 4.2x f/1.8-2.8. Ofrece grabación en 4K sin recorte, video en Full HD a 120 fps, y soporte para transmisión en vivo a YouTube. Ideal para vloggers y creadores de contenido gracias a su pantalla táctil abatible de 3" y conectividad Wi-Fi/Bluetooth.' },

    { id: 3, name: 'Fujifilm X100V', price: 7000000, category: 'Electronics', imageUrl: 'Con3.jpeg', descrip: 'Cámara compacta con sensor APS-C de 26.1 MP, lente fija 23mm f/2, visor híbrido y grabación en 4K. Ideal para fotografía callejera y de viajes, con diseño retro y alto rendimiento.' },

    { id: 4, name: 'Panasonic Lumix DC - LX100 II', price: 6000000, category: 'Electronics', imageUrl: 'Con4.jpeg', descrip: 'Cámara compacta premium con sensor Micro Cuatro Tercios de 17 MP y lente Leica DC Vario-Summilux 24-75mm f/1.7-2.8. Ofrece grabación de video en 4K, pantalla táctil de 3", visor electrónico y conectividad Bluetooth. Ideal para fotógrafos entusiastas que buscan portabilidad sin sacrificar calidad de imagen.' },

    { id: 5, name: 'Ricoh GR III X', price: 4000000, category: 'Electronics', imageUrl: 'Con5.jpeg', descrip: 'Cámara compacta con sensor APS-C de 24.2 MP, lente fija de 40mm f/2.8, ideal para fotografía callejera. Ofrece estabilización de imagen y video en Full HD.' },

    { id: 6, name: 'Nikon Coolpix P1000', price: 5000000, category: 'Electronics', imageUrl: 'Con6.jpeg', descrip: 'Cámara bridge con sensor de 16 MP y zoom óptico de 125x. Ideal para fotografía de naturaleza y astronomía, con grabación en 4K y estabilización de imagen.' },

    { id: 7, name: 'Olympus Tough TG - 7', price: 2000000, category: 'Electronics', imageUrl: 'Con7.jpeg', descrip: 'Cámara compacta resistente con sensor de 12 MP, zoom de 4x y capacidades todoterreno: sumergible, a prueba de caídas y resistente al frío. Ideal para aventuras y deportes extremos.' },

    { id: 8, name: 'Canon PowerShot SX740 HS', price: 5000000, category: 'Electronics', imageUrl: 'Con8.jpeg', descrip: 'Cámara compacta con sensor CMOS de 20.3 MP y lente con zoom óptico de 40x (equivalente a 24–960 mm). Ofrece grabación de video en 4K y cuenta con pantalla LCD abatible de 3" para selfies y vlogging. Incorpora estabilización óptica de imagen y conectividad Wi-Fi y Bluetooth para compartir fotos fácilmente.' },

    { id: 9, name: 'Sony Cyber-shot DSC - WX500', price: 4000000, category: 'Electronics', imageUrl: 'Con9.jpeg', descrip:'Cámara compacta con sensor de 18.2 MP y zoom óptico de 30x, pantalla abatible de 3" y conectividad Wi-Fi. Ideal para selfies y vlogging.' },

    { id: 10, name:'Panasonic Lumix TZ200' , price :3000000 , category:'Electronics' , imageUrl:'Con10.jpeg' , descrip:'Cámara compacta con sensor de 1" y 20.1 MP, lente Leica DC Vario-Elmar 24–360 mm f/3.3–6.4, y grabación de video en 4K. Equipada con visor electrónico de 0.21" y pantalla táctil de 3", es ideal para viajes y fotografía versátil. Incluye conectividad Wi-Fi y Bluetooth para compartir fotos fácilmente.'},

  ]);

 

  getProducts() { // Método para obtener los productos y llevarlos a product-list.component.ts
    return this.products.asObservable();

    
  }

}