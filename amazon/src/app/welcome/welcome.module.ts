import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './pages/welcome.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductBookmarkComponent } from './pages/product-bookmark/product-bookmark.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NavbarComponent } from '../shared';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NzImageModule,
    NzIconModule,
    NzGridModule
  ],
  declarations: [WelcomeComponent, ProductListComponent, ProductDetailsComponent, ProductBookmarkComponent, NavbarComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
