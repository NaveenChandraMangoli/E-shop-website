import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart: any[] = [];

  constructor() {}

  //add the item in the cart
  addToCart(product: any) {
    //check the product present or not
    const existingProduct = this.cart.find(item => item.id === product.id);
    // if product prsent then it add the item into cart
    if (existingProduct) {
      existingProduct.quantity += 1;
    } 
    else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }
  //it return the save items of cart
  getCartItems() {
    return this.cart;
  }
 
  // it remove the cart item on the bases of index no.
  removeItem(index: number) {
    this.cart.splice(index, 1);
  }

  // increase the cart item 
  increaseQuantity(index: number) {
    this.cart[index].quantity += 1;
  }
  
  // decrease the cart item 
  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    }
  }

  //calculate the total price of cart
  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.cur_price * item.quantity, 0);
  }
}
