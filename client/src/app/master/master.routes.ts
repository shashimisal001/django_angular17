import { Routes } from '@angular/router';
import { HomeComponet } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';

export const routes: Routes = [
    { path: "", component: HomeComponet },
    { path: "products", component: ProductsComponent }
];
