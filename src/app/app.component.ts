import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatModule } from './appModule/mat.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatModule,HeaderComponent,HomeComponent,RouterLink,FooterComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a_material';
  
}
