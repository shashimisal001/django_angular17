import { Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products.component";

export const routes: Routes = [
    { 
        path: "", 
        component: ProductsComponent, 
        data: {
            title: "Products",
            subtitle: "Sneak into our products"
        } 
    },
    {
        path: "detail",
        component: ProductDetailComponent,
        data: {
            title: "Product Detail",
            subtitle: "Checkout all about the product"
        }
    }
]