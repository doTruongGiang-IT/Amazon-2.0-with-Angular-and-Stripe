import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../../../core/models/product.model';
import { ApiResponse } from './../../../core/models/api-response.model';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductList } from 'src/app/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  productDetails?: any;
  category: string = "";
  productRecommends?: any;
  productID: number = 0;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
    this.subs.push(
      this.activatedRoute.params.subscribe((params: Params) => {
        this.ngOnInit();
      }),
    );
  }

  ngOnInit(): void {
    this.loadDetails();
  };

  loadDetails(): void {
    this.subs.push(
      this.activatedRoute.params.subscribe((param: Params) => {
        this.productID = param.id;
      }),
      this.productService.getProductDetails(this.productID.toString()).subscribe((detail: ApiResponse<Product>) => {
        this.productDetails = detail;
        this.productDetails['qty'] = 1;
        this.productService.getProductRecommend(this.productDetails.category).subscribe((listRecommend: ApiResponse<ProductList>) => {
          this.productRecommends = listRecommend;
        });
      }),
    );
  };

  addMark(id: number): void {
    this.productService.addBookMark(id);
  };

  addToCart(product: Product): void {
    this.productService.addCart(product);
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };
}
