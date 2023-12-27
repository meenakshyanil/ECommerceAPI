import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { CategoryComponent } from './components/category/category.component';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CategorybylistComponent } from './components/categorybylist/categorybylist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    HeadbarComponent,
    CategoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ErrorPageComponent,
   CategorybylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
