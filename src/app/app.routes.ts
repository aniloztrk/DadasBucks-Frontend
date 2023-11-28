import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DrinksComponent } from './drinks/drinks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'drinks', component: DrinksComponent },
];