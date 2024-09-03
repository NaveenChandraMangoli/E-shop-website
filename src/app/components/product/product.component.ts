import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { CartService } from '../../services/cart.service';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { FavoriteService } from '../../services/favorite.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,SearchComponent,FooterComponent,CarouselComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  productService=inject(ProductService);
  product: Product[]=[];

  ngOnInit(){
    this.productService.getProducts().subscribe((result)=>{
      this.product = result as any[];
    })
  }
  

    searchText:string="";

    onSearchTextEntered(searchValue:any){
      this.searchText = searchValue;
      console.log(this.searchText)
    }

    viewProduct(id:number){
      this.router.navigate(['/product-view', id]);
    }

    constructor(private cartService: CartService,private router:Router,private favoriteService: FavoriteService) {}

    addToCart(product: any) {
      // Call the cart service 
      this.cartService.addToCart(product);
      alert(`${product.name} added to cart!`);
    }

    addToFavorites(product: any) {
      // Call the favorite service 
      this.favoriteService.addToFavorites(product);  
      alert(product.name + ' added to favorites!');
    }
}
function getProducts() {
  throw new Error('Function not implemented.');
}

