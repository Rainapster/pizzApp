import { Component, inject } from '@angular/core';
import { Pizza, SetCartItemProps } from '../models/pizza.models';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="row">
      <div *ngFor="let product of cartProducts" class="card">
        <img
          src="{{ product.image }}"
          class="card-img-top"
          alt="{{ product.name }}"
          [routerLink]="['/pizza', product.id]"
          style="cursor:pointer;"
        />
        <div class="card-body margin: 10px;">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">Price: {{ product.price }}</p>
          <div class="interaction-buttons d-flex flex-row align-items-center">
            <button (click)="addToCart({item: product})" class="btn btn-primary">+</button>
            <p class="mb-0 mx-2">{{ product.quantity }}</p>
            <button (click)="removeFromCart({item: product})" [disabled]="product.quantity===0" class="btn btn-secondary">-</button>
            <button (click)="deleteCard(product)" class="btn btn-danger ms-2">Elimina</button>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .card {
      width: 18rem;
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }
    .card:hover {
      background-color:rgb(219, 223, 226);
    }
  `,
})
export class CardComponent {
  cartProducts: Pizza[] = [];


  constructor(private productService: ProductService, private cartService: CartService) {
    if(!this.cartService.getCartItems().length) {
    this.productService
      .getProducts()
      .subscribe((data) => {
        this.cartService.setCartItems(data); 
        this.cartProducts = this.cartService.getCartItems();
      });
    } else {
      this.cartProducts = this.cartService.getCartItems();
    }
  }
  addToCart({ item }: SetCartItemProps){
    this.cartService.setCartItem({item, add: true});
  }
  removeFromCart({ item }: SetCartItemProps){
    this.cartService.setCartItem({item, remove: true});
  }
   deleteCard(item: Pizza){
    this.cartService.deleteCartItem(item);
    this.cartProducts = this.cartService.getCartItems();
  }
}
