import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { MatModule } from '../../appModule/mat.module';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  onViewProduct(event:any){
    console.log("View product",event)
  }

}
