import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // cartItems : any= [];

  // constructor(private cartService: CartService) {
  //   this.cartItems = this.cartService.getCartItems();
  // }

  // removeItem(index: number) {
  //   this.cartService.removeItem(index);
  //   alert(`Are you sure u remove this!`);
  // }

  cartItems:any = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  removeItem(index: number) {
    //delete cart item
    this.cartService.removeItem(index);
    // Update cart items
    this.cartItems = this.cartService.getCartItems();  
    //again calculate the item
    this.calculateTotalPrice();
  }

  increaseQuantity(index: number) {
    // Update cart items
    this.cartService.increaseQuantity(index);
    //again calculate the item
    this.calculateTotalPrice();
  }

  decreaseQuantity(index: number) {
    // Update cart items
    this.cartService.decreaseQuantity(index);
    //again calculate the item
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }



}
