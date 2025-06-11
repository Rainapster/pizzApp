import { Injectable } from '@angular/core';
import { Pizza, SetCartItemProps } from '../models/pizza.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Pizza[] = [];


  setCartItems(items: Pizza[]) {
    this.cartItems = items;
  }

  setCartItem({ item, add, remove }: SetCartItemProps) {
    const itemIndex = this.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex === -1) {
      this.cartItems = [...this.cartItems, { ...item, quantity: 1 }];
    } else {
      if (add) {
        this.cartItems[itemIndex].quantity++;
      } else if (remove) {
        if (this.cartItems[itemIndex].quantity > 0) {
          this.cartItems[itemIndex].quantity--;
        }
      }
    }
  }

  getCartItems(): Pizza[] {
    return this.cartItems;
  }

  resetCartItems() {
    this.cartItems = [];
  }

  deleteCartItem(item: Pizza) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
  }
}
