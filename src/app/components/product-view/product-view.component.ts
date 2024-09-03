import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output, output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FavoriteService } from '../../services/favorite.service';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule,RouterLink,ProductComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent implements OnInit{
  product=[
    {
      id:1,
      name: "Womens Full Shirt",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dlS6PQOrRn3-UKypYGw1cj7G0QH9f_HLEg&s",
      cur_price:"1000",
      dis_price:"2000",
    },
    {
      id:2,
      name: "Mens Kurta",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiyssPHUw3Tsg3yPtz-y7ATu8mVbOYd12ZesO4mclWrmM6bjwYDKDd0_QybMzdfHdwFk&usqp=CAU",
      cur_price:"250",
      dis_price:"500",
    },
    {
      id:3,
      name: "Women clothes",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9W2r8pAOmr1wMLxNWzU9h_K-2MlS_HUszyw&s",
      cur_price:"800",
      dis_price:"1200",
    },
    {
      id:4,
      name: "Mens Pent",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://tiimg.tistatic.com/fp/1/007/766/beautiful-casual-wear-soft-comfortable-modern-breathable-stylish-demin-regular-fit-jeans-pant-for-men-943.jpg",
      cur_price:"1000",
      dis_price:"1500",
    },
    {
      id:5,
      name: "Womens Shirt",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://tiimg.tistatic.com/fp/1/008/416/multi-color-full-sleeves-casual-wear-check-pattern-ladies-cotton-shirts-676.jpg",
      cur_price:"2500",
      dis_price:"4000",
    },
    {
      id:6,
      name: "Mens Shirt",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://5.imimg.com/data5/JN/TP/MR/ANDROID-58425086/product-jpeg-500x500.jpg",
      cur_price:"700",
      dis_price:"1200",
    },
    {
      id:7,
      name: "Mens pents",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2f3JFZEAVFTv6kvV9mPn-9jYlGp0Ofo-8g&s",
      cur_price:"900",
      dis_price:"1800",
    },
    {
      id:8,
      name: "Womens pents",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvOATsMrFuwtBjtqIasFVoTdF24rv9ybWHw&s",
      cur_price:"800",
      dis_price:"1300",
    },
    {
      id:9,
      name: "Mens Jacked",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-PvNvGCcau-xIrzYDt6jclZpUx2DOGWXHg&s",
      cur_price:"1500",
      dis_price:"3000",
    },
    {
      id:10,
      name: "Womens Jacked",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDWGfsJfMFWTYPSkfBRth3h5TTX9UscAodQ&s",
      cur_price:"1000",
      dis_price:"2000",
    },
    {
      id:11,
      name: "Mens Shirt",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9syaJ0Hosl1_6B4LHvwi5IS5E0KMdETGPx2fZiewr_oo1cB6D4FXa0bjcTc7RGqqxyc&usqp=CAU",
      cur_price:"600",
      dis_price:"1000",
    },
    {
      id:12,
      name: "Womens suits",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajLP5t-8tmD8F0YgWLHzcnW-aKAOcnJsIaQ&s",
      cur_price:"2100",
      dis_price:"3000",
    },
    {
      id:13,
      name: "Mens Shirt",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfpKwlLwry8boa2yI4MLTkQhEZphbyefuGfJIq04Cu2Oznm00_PwZhxbC_bz9oOZngeU&usqp=CAU",
      cur_price:"800",
      dis_price:"1200",
    },
    {
      id:14,
      name: "Womens pents",
      detail: "Step into confidence with our premium clothing line, where style meets comfort in every stitch. Our designs blend contemporary trends with timeless appeal, perfect for any occasion.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmR37em5acs1vsRp0sL6Ih0mJAQgCnl9OaTw&s",
      cur_price:"900",
      dis_price:"1500",
    }
  ]
  products: { id: number; name: string; detail: string; image: string; cur_price: string; dis_price: string; } | undefined;
  router: any;
    
    constructor(private route:ActivatedRoute,private cartService: CartService,private favoriteService:FavoriteService){
    }
    // products!: { id: number; name: string; detail: string; image: string; cur_price: string; dis_price: string; };
    
    // productService=inject(ProductService);
    ngOnInit()
    {
    //   this.productService.getProducts().subscribe((result)=>{
    //   this.product = result as Product[];
    // })
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.products = this.product.find(p => p.id === id);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  
  addToFavorites(product: any) {
    // Call the favorite service 
    this.favoriteService.addToFavorites(product);  
    alert(product.name + ' added to favorites!');
  }

  viewProduct(id:number){
    this.router.navigate(['/product-view', id]);
  }

}
