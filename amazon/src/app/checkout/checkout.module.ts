import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './pages/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { SuccessComponent } from './pages/success/success.component';
import { OrderComponent } from './pages/order/order.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    SuccessComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    NzIconModule,
    NzImageModule
  ],
  providers: [
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
