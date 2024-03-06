import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffersComponent} from "./offers/offers.component";
import {ProductsComponent} from "./products/products.component";
import {CartComponent} from "./cart/cart.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {CheckoutComponent} from "./checkout/checkout.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'checkout', component: CheckoutComponent },
];
