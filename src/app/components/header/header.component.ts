import { Component } from '@angular/core';
import { MatModule } from '../../appModule/mat.module';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatModule,CommonModule,SearchComponent,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public authService: AuthServiceService) {}


  logout() {
    this.authService.logout();
  }

}
