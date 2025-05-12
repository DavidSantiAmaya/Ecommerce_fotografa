import { Component, OnInit } from '@angular/core';
import { ConvencionalService } from '../../services/convencional.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // importar FormsModule, Forzar la importación

interface Product {

  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  descrip: string;
}

@Component({ // definición del componente
  selector: 'app-convencional-list',
  standalone: true, // importante en Angular 18.2.10
  imports: [CommonModule, FormsModule], // Importación necesaria
  templateUrl: '../product-list/product-list.component.html', // usar la plantilla HTML
  styleUrl: '../product-list/product-list.component.css' // usar la plantilla CSS
})


export class ConvencionalListComponent implements OnInit{
  products: Product[] = []; // Crear la variable para los productos
  filteredProducts: Product[] = []; // Crear un array del filtro para la busqueda los productos
  searchTerm: string = ''; // Crear el buscador

  constructor(private conventionalService: ConvencionalService) {} //constructor
  //inyectar el servicio de productos
  
  // CAMBIAR NOMBRE productService a convenctionalService
  ngOnInit(): void { // Llamar al servicio para obtener los productos y asignarlos a la variable products
    this.conventionalService.getProducts().subscribe((products) => {
      this.products = products;
    });

  } 

  searchProducts(): void {  // Función para la busqueda || Convertir el término de búsqueda a minúsculas y eliminar espacios en blanco
    const term = this.searchTerm.trim().toLowerCase();

    if (term === '') {
      this.filteredProducts = []; // Oculta lista si el campo está vacío
      return;
    }
    // Filtrar los productos que coinciden con el término de búsqueda
    // y asignarlos a filteredProducts
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }

}
