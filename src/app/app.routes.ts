import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path:"",component: HomeComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path:"product",component: ProductComponent},
    {path:"about",component: AboutComponent},
    {path:"register",component: RegisterComponent},
    {path:"favorite",component: FavoriteComponent,  canActivate: [AuthGuard]},
    {path:"login",component: LoginComponent},
    {path:"contact",component: ContactComponent},
    {path:"cart",component: CartComponent,  canActivate: [AuthGuard]},
    {path:"product-view/:id",component: ProductViewComponent,  canActivate: [AuthGuard]},
];

// { path: '', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }