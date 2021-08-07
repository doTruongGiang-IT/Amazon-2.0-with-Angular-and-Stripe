import { Router } from '@angular/router';
import { AuthService, Product } from 'src/app/core';
import { Subscription } from 'rxjs';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  subTotal: number = 0;
  products: Product[] = [];

  stripePromise = loadStripe(environment.stripe_public_key);

  constructor(
    public productService: ProductService, 
    public auth: AuthService, 
    private functions: AngularFireFunctions,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createStripe();
    this.subs.push(
      this.productService.cartProducts$.subscribe((item) => {
        this.totalAmount(item);
      })
    );
  };

  totalAmount(items: Product[]): void {
    let total = 0;
    items.forEach((item) => {
      total += (item.qty * item.price);
      this.subTotal = Number.parseFloat(total.toFixed(2));
    });
  };

  increaseQty(id: number): void {
    this.productService.increaseQty(id);
  };

  decreaseQty(id: number): void {
    this.productService.deceaseQty(id);
  };

  removeItem(id: number): void {
    this.productService.deleteItem(id);
  };

///api/create-checkout-session
  // async createCheckoutSession() {
  //   const user = await this.auth.getUser();
  //   const stripe = await this.stripePromise;
  //   this.productService.cartProducts$.subscribe(products => {
  //     return this.products = products;
  //   });
  //   const format = this.products.map((product: Product) => ({
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

    // const data = {
    //   payment_method_types: ['card'],
    //   shipping_address_collection: {
    //       allowed_countries: ['US', 'GB', 'VN'],
    //   },
    //   line_items: format,
    //   mode: 'payment',
    //   success_url: `http://localhost:4200/success`,
    //   cancel_url: `http://localhost:4200/cart`,
    //   metadata: {
    //       email: user?.email,
    //       images: JSON.stringify(this.products.map((product: Product) => product.image)),
    //   },
    // };

    // const checkoutSession2 = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': "Bearer " + environment.stripe_secret_key
    //   },
    //   body: JSON.stringify(data)
    // });

  //   const checkoutSession = await axios.post("https://api.stripe.com/v1/checkout/sessions", {
  //       // products: () => {
  //       //   this.productService.cartProducts$.subscribe(products => ({products}));
  //       // },
  //       // email: user?.email
  //       payment_method_types: ['card'],
  //       shipping_address_collection: {
  //           allowed_countries: ['US', 'GB', 'VN'],
  //       },
  //       line_items: format,
  //       mode: 'payment',
  //       success_url: `http://localhost:4200/success`,
  //       cancel_url: `http://localhost:4200/cart`,
  //       metadata: {
  //           email: user?.email,
  //           images: JSON.stringify(this.products.map((product: Product) => product.image)),
  //       },
  //   });

  //   const result = await stripe?.redirectToCheckout({
  //       sessionId: checkoutSession.data.id
  //   });

  //   console.log(result);
  // };

  createStripe() {
    if(!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.title = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(script);
    }
  };

  async processToCheckout(amount: number) {
    const user = await this.auth.getUser();

    const payment = (<any>window).StripeCheckout.configure({
      key: "pk_test_51JGwcVGI3uSojLMgxnjqLEMMsiIonVytEErnnfCeT4YFHRlMr2Wln8HefdZfBIccb4w1goK1nFjBgQ6t9Enxqoel00nUjUVfPf",
      image: '../../../../assets/money.png',
      locale: "auto",
      token: function(stripeToken: any) {
        console.log(stripeToken.card);
      },
    });

    payment.open({
      name: 'Angular Amazon Store',
      email: user?.email,
      description: "This price is exclusive of taxes GST will be added during checkout.",
      amount: amount * 100
    });
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if(sub) {
        sub.unsubscribe();
      };
    });
  };

}
