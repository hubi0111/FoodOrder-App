import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { FoodMenuComponent } from './admin/foodmenu/foodmenu.component';
import { AddFoodComponent } from './admin/foodmenu/addfood/addfood.component';
import { ViewFoodComponent } from './admin/foodmenu/viewfood/viewfood.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { GlobalApp } from './global';
import { CartComponent } from './shop/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authentication/AuthGuard';
import { AdminAuthGuard } from './authentication/AdminAuthGuard';
import { RestrictedComponent } from './restricted/restricted.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    FoodMenuComponent,
    AddFoodComponent,
    ViewFoodComponent,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    HomeComponent,
    RestrictedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GlobalApp,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
