import { map } from 'rxjs/operators';
import { Product } from './../models/product.model';
import { ApiResponse } from './../models/api-response.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  arrID: Number[] = [];
  arrCart: Product[] = [];

  private searchProducts = new BehaviorSubject<Product[]>([]);
  searchProducts$: Observable<Product[]> = this.searchProducts.asObservable();

  private bookMarkProducts = new BehaviorSubject<Number[]>([]);
  bookMarkProducts$: Observable<Number[]> = this.bookMarkProducts.asObservable();

  private cartProducts = new BehaviorSubject<Product[]>([]);
  cartProducts$: Observable<Product[]> = this.cartProducts.asObservable();

  constructor(private apiService: ApiService) { }

  getProductList(): Observable<ApiResponse<Product[]>> {
    return this.apiService.get();
  };

  getProductDetails(endpoint: string): Observable<ApiResponse<Product[]>> {
    return this.apiService.get(`/${endpoint}`);
  };

  getProductRecommend(endpoint: string): Observable<ApiResponse<Product[]>> {
    return this.apiService.get(`/category/${endpoint}`);
  };

  rating(): Array<Number> {
    let number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    let star: Array<Number> = [];
    for(let i = 0 ; i < number; i++) {
      star.push(i);
    }
    return star;
  };

  searchItem(productList: Product[], searchKey: string): Observable<Product[]> {
    let result: Product[] = [];
    result = productList.filter((product) => product.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1);
    this.searchProducts.next(result);
    return this.searchProducts;
  };

  addBookMark(id: number): Observable<Number[]> {
    let index = this.arrID.findIndex((item) => item === id);
    if(index === -1) this.arrID.push(id);
    this.bookMarkProducts.next(this.arrID);
    return this.bookMarkProducts;
  };

  addCart(product: Product): Observable<Product[]> {
    let index = this.arrCart.findIndex((cartItem) => cartItem.id === product.id);
    if(index === -1) {
      this.arrCart.push(product)
    }else {
      this.arrCart[index].qty += 1;
    };
    this.cartProducts.next(this.arrCart);
    return this.cartProducts;
  };

  increaseQty(id: number): Observable<Product[]> {
    let index = this.arrCart.findIndex((cartItem) => cartItem.id === id);
    if(index !== -1) this.arrCart[index].qty += 1;
    this.cartProducts.next(this.arrCart);
    return this.cartProducts;
  };

  deceaseQty(id: number): Observable<Product[]> {
    let index = this.arrCart.findIndex((cartItem) => cartItem.id === id);
    if(index !== -1) this.arrCart[index].qty -= 1;
    if(this.arrCart[index].qty < 1) this.arrCart.splice(index, 1);
    this.cartProducts.next(this.arrCart);
    return this.cartProducts;
  };

  deleteItem(id: number): Observable<Product[]> {
    this.arrCart = this.arrCart.filter((cartItem) => cartItem.id !== id);
    this.cartProducts.next(this.arrCart);
    return this.cartProducts;
  };
}
