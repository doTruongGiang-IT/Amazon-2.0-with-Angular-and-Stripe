import { environment } from './../../../environments/environment';
import { Product } from 'src/app/core';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  // crypto = require('crypto');
  // stripe = require("stripe")(environment.stripe_secret_key);

  // async createSession(req: HttpRequest<any>, next: HttpHandler) {
  //   const {products, email} = req.body;
  //   const format = products.map((product: Product) => ({
  //       price_data: {
  //           currency: 'gbp',
  //           product_data: {
  //               name: product.title,
  //               images: [product.image],
  //           },
  //           unit_amount: product.price * 100
  //       },  
  //       description: product.description,
  //       quantity: product.qty
  //   }));

  //   const session = await this.stripe.checkout.sessions.create({
  //     payment_method_types: ['card'],
  //     shipping_address_collection: {
  //         allowed_countries: ['US', 'GB', 'VN'],
  //     },
  //     line_items: format,
  //     mode: 'payment',
  //     success_url: `http://localhost:4200/success`,
  //     cancel_url: `http://localhost:4200/cart`,
  //     metadata: {
  //         email,
  //         images: JSON.stringify(products.map((product: Product) => product.image)),
  //     },
  //   });

  //   return ({ id: session.id });
  // };
}
