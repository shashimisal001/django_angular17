import { Routes } from '@angular/router';
import { IndexComponet } from '../index/index.component';

export const routes: Routes = [
  {
    path: "",
    component: IndexComponet,
    data: {
      title: "Shop in style",
      subtitle: "With this shop hompeage template"
    }
  },
  {
    path: "products",
    loadChildren: () => import('../products/products.routes').then(r => r.routes)
  }
];
