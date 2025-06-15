import { Component, inject } from '@angular/core';
import { Pizza, SetCartItemProps } from '../models/pizza.models';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cards',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cards-container row justify-content-center m-0">
      <div *ngIf="cartProducts.length <= 0" class="d-flex justify-content-center align-items-center">
        <button class="btn btn-primary" (click)="resetCards()">Reset Order</button>
      </div>
      <div *ngFor="let product of cartProducts" class="card px-0">
        <img
          src="{{ product.image }}"
          class="card-img-top"
          alt="{{ product.name }}"
          [routerLink]="['/pizza', product.id]"
          style="cursor:pointer;"
        />
        <div class="card-body margin: 10px;">
          <h5 class="card-title text-center">{{ product.name }}</h5>
          <p class="card-text text-center">Price: {{ product.price }}</p>
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
    .cards-container {
      padding-top: 140px;
    }
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
      this.clearCards();
    } else {
      this.cartProducts = this.cartService.getCartItems();
    }
  }
  private clearCards() {
    this.productService
    .getProducts()
    .subscribe((data) => {
      this.cartService.setCartItems(data); 
      this.cartProducts = this.cartService.getCartItems();
    });
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
  resetCards() {
    this.clearCards();
  }
}
