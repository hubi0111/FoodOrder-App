import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { FoodMenuComponent } from './admin/foodmenu/foodmenu.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CartComponent } from './shop/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authentication/AuthGuard';
import { AdminAuthGuard } from './authentication/AdminAuthGuard';
import { RestrictedComponent } from './restricted/restricted.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/users', canActivate: [AuthGuard, AdminAuthGuard], component: UsersComponent },
  { path: 'admin/menu', canActivate: [AuthGuard, AdminAuthGuard], component: FoodMenuComponent },
  { path: 'shop', canActivate: [AuthGuard], component: ShopComponent },
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'restricted', canActivate: [AuthGuard], component: RestrictedComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
