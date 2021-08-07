import { User } from './../../../core/models/user.model';
import { ApiResponse } from './../../../core/models/api-response.model';
import { Subscription } from 'rxjs';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, AuthService } from 'src/app/core';

@Component({
  selector: 'app-product-bookmark',
  templateUrl: './product-bookmark.component.html',
  styleUrls: ['./product-bookmark.component.scss']
})
export class ProductBookmarkComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  bookMarks: any[] = [];
  userLogin?: User | null;

  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subs.push(
      this.productService.bookMarkProducts$.subscribe(arrId => {
        this.loadBookMarks(arrId);
      }),
    );
  };

  loadBookMarks(ids: Array<Number>): void {
    ids.forEach((id) => {
      this.subs.push(
        this.productService.getProductDetails(id.toString()).subscribe((detail: ApiResponse<Product>) => {
          this.bookMarks.push(detail);
          this.authService.user$?.subscribe(user => {
            this.userLogin = user;
            if(this.userLogin) this.userLogin['books'] = this.bookMarks;
          });
        }),
      );
    })
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
