import { Routes } from '@angular/router';
import { HomeComponent } from './features/home.component';
import { OrderComponent } from './features/order.component';
import { PizzaDetailComponent } from './features/pizza-detail.component';
import { CartComponent } from './features/cart.component';
import { FileNotFoundComponent } from './core/file-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'cart', component: CartComponent },

  { path: 'pizza/:id', component: PizzaDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component: FileNotFoundComponent}
];
