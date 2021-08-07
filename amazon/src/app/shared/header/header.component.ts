import { ProductService } from './../../core/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiResponse, Product, ProductList } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  productList?: any;

  constructor(private productService: ProductService) { }

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

  searchItem(key: string) {
    this.productService.searchItem(this.productList, key);
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      }
    })
  };

}
