import { Component } from '@angular/core';
import { Pizza } from '../models/pizza.models';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  template: `
  <div class="container d-flex align-items-center justify-content-center flex-column">
    <div *ngFor="let item of cartItems" class="d-flex align-items-center justify-content-center flex-column mb-3">
      <p>{{ item.name }} - {{ item.quantity }} x {{ item.price }}</p>
      <img src="{{ item.image }}" alt="{{ item.name }}" class="img-fluid" style="width: 100px; height: auto; margin-left: 10px;"/>
    </div>
    <div *ngIf="cartItems.length > 0">
      <h3>Total: {{ getTotal().toFixed(2)}}</h3>
    </div>
    <div *ngIf="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <button *ngIf="cartItems.length > 0" class="btn btn-primary" (click)="pay()">Pay</button>
  </div>

    <div class="modal" *ngIf="showThanks">
      <div class="modal-content">
        <h2>Thank you for your order!</h2>
        <button class="btn btn-primary" (click)="goHome()">Chiudi</button>
      </div>
    </div>
    
  `,
  styles: `

    .modal {
    position: fixed;
    top: 0; left: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.2);
    max-width: 30%;
    padding: 20px;
    text-align: center;
  }
  `
})
export class CartComponent {
  cartItems: Pizza[] = [];
  showThanks: boolean = false;

  constructor(private cartService: CartService, private router: Router) {
     this.cartItems = this.cartService.getCartItems().filter(item => item.quantity > 0);
  }
  getTotal() : number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  pay(){
    this.showThanks = true;
    this.cartService.resetCartItems();
  }
    goHome() {
    this.showThanks = false;
    this.router.navigate(['/order']);
  }
}
