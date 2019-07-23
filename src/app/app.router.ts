import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AboutComponent } from './about/about.component';
//import { ProductsComponent} from './products/products.component';
//import { HomeComponent } from './home/home.component';
//import { CartComponent } from './cart/cart.component';
//import { SidebarComponent } from './sidebar/sidebar.component';

export const router: Routes = [ //viewable publically so other components of our app can see it
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //path redirects to home on full match of path which will be enpty anyway
  {path: 'about', component:AboutComponent}
  //{path: 'products', component:ProductsComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router); //using 'forRoot' util to regster our newly created router on the root or our application making it available everywhere.