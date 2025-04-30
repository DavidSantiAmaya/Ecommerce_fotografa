import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

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

  imports: [CommonModule], // Importación necesaria

  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

 

  constructor(private productService: ProductService) {}

 

  ngOnInit(): void {

    this.productService.getProducts().subscribe((products) => {

      this.products = products;

    });

  }

 

  addToCart(product: Product) {

    // Lógica para agregar al carrito

    console.log(`Producto añadido al carrito: ${product.name}`);

  }

}
