import { Product } from './../../../core/models/product.model';
import { ProductList } from './../../../core/models/product-list.model';
import { ApiResponse } from './../../../core/models/api-response.model';
import { Router } from '@angular/router';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  productList?: any;

  constructor(private productService: ProductService, private router: Router) { 
    this.subs.push(
      this.productService.searchProducts$.subscribe((product) => this.productList = product)
    )
  }

  ngOnInit(): void {
    this.loadProducts();
  };
  
  loadProducts(): void {
    this.subs.push(
      this.productService.getProductList().subscribe((products: ApiResponse<ProductList>) => {
        this.productList = products;
        this.productList.forEach((product: Product) => {
          product["rating"] = this.productService.rating();
          product["qty"] = 1;
        });
      })
    );
  };

  addToCart(product: Product): void {
    this.productService.addCart(product);
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      }
    })
  };

}
