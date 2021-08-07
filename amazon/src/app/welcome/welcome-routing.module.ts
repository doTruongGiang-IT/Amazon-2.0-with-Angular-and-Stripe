import { AuthGuard } from './../core/guards/auth.guard';
import { ProductBookmarkComponent } from './pages/product-bookmark/product-bookmark.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome.component';

const routes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'list/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'bookmark',
        component: ProductBookmarkComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
