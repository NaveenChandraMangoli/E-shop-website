import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteProducts: any[] = [];

  constructor(private favoriteService: FavoriteService,private cartService: CartService,private router:Router) {}

  ngOnInit(){
    // Get the list of favorite products
    this.favoriteProducts = this.favoriteService.getFavorites();  
  }

  // Remove a product from favorites
  removeFromFavorites(product: any) {
    this.favoriteService.removeFromFavorites(product);
    // Update the favorite list
    this.favoriteProducts = this.favoriteService.getFavorites();  
  }

  viewProduct(id:number){
    this.router.navigate(['/product-view', id]);
  }

  addToCart(product: any) {
    // Call the cart service 
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

}

