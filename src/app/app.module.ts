import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//helps w request & responses
import { HashLocationStrategy, LocationStrategy } from '@angular/common';//helps w parsing url

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { ProductsComponent} from './products/products.component';
//import { HomeComponent } from './home/home.component';
//import { CartComponent } from './cart/cart.component';
//import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    SidebarComponent,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
