import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // importar FormsModule, Forzar la importación

interface Product {

  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

 

@Component({
  selector: 'app-product-list',
  standalone: true, // importante en Angular 18.2.10
  imports: [CommonModule, FormsModule], // Importación necesaria
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  products: Product[] = []; // Crear la variable para los productos
  filteredProducts: Product[] = []; // Crear el filtro para la busqueda los productos
  searchTerm: string = ''; // Crear el buscador

  constructor(private productService: ProductService) {}

 
  ngOnInit(): void { // Llamar al servicio para obtener los productos y asignarlos a la variable products
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });

  }


  searchProducts(): void {  // Función para la busqueda || Convertir el término de búsqueda a minúsculas y eliminar espacios en blanco
    const term = this.searchTerm.trim().toLowerCase();

    if (term === '') {
      this.filteredProducts = []; // Oculta lista si el campo está vacío
      return;
    }

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }

}