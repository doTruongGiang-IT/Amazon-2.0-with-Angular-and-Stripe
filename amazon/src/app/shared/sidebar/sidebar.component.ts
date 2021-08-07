import { Subscription } from 'rxjs';
import { ProductService } from './../../core/services/product.service';
import { AuthService } from 'src/app/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  bookMarkQty?: any;
  cartQty?: any;

  constructor(public auth: AuthService, public productService: ProductService) { 
    this.subs.push(
      this.productService.bookMarkProducts$.subscribe(quantity => this.bookMarkQty = quantity),
      this.productService.cartProducts$.subscribe(quantity => this.cartQty = quantity),
    );
  };

  ngOnInit(): void {
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
