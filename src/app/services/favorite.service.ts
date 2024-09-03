import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  // Store favorite products
  private favorites: any[] = []; 

  // Add product to favorites only if it's not already present
  addToFavorites(product: any) {
    const existingProduct = this.favorites.find(item => item.id === product.id);
    if (!existingProduct) {
      this.favorites.push(product);
    } else {
      alert(product.name + ' is already in favorites!');
    }
  }

  // Get all favorite products
  getFavorites() {
    return this.favorites;
  }

  // Remove product from favorites
  removeFromFavorites(product: any) {
    this.favorites = this.favorites.filter(item => item.id !== product.id);
  }
}
