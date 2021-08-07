import { AuthGuard } from './../core/guards/auth.guard';
import { OrderComponent } from './pages/order/order.component';
import { SuccessComponent } from './pages/success/success.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
        path: '',
        component: CheckoutComponent,
        children: [
            {
                path: 'cart',
                component: CartComponent
            },
            {   
                path: 'success',
                component: SuccessComponent
            },
            {
                path: 'order',
                component: OrderComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
