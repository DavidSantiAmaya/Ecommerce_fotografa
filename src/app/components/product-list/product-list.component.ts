import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from '../../services/product.service';
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

 

@Component({
  selector: 'app-product-list', // Nombre del selector para llamar al componente en el HTML
  standalone: true, // importante en Angular 18.2.10
  imports: [CommonModule, FormsModule], // Importación necesaria
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  products: Product[] = []; // Crear la variable para los productos
  filteredProducts: Product[] = []; // Crear un array del filtro para la busqueda los productos
  searchTerm: string = ''; // Crear el buscador

  constructor(private productService: ProfesionalService) {}

 
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
    // Filtrar los productos que coinciden con el término de búsqueda
    // y asignarlos a filteredProducts
    // Se utiliza el método filter para crear un nuevo array que contenga solo los productos que cumplen con la condición especificada en la función de callback
    // La función de callback verifica si el nombre del producto (en minúsculas) incluye el término de búsqueda (también en minúsculas)
    // El método toLowerCase() se utiliza para hacer la comparación sin tener en cuenta las mayúsculas y minúsculas
    // El método includes() se utiliza para verificar si el término de búsqueda está presente en el nombre del producto
    // El resultado es un nuevo array que contiene solo los productos que coinciden con el término de búsqueda
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }

}